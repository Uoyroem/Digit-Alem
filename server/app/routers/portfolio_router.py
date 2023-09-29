from typing import Any, Annotated

from fastapi import APIRouter, status, UploadFile, Form, Request, HTTPException
from fastapi.responses import HTMLResponse, FileResponse

from .. import schemas, dependecies, services


router = APIRouter(prefix="/portfolios")


@router.get("/", response_model=list[schemas.Project])
async def get_portfolios(session: dependecies.Session) -> Any:
    return await services.portfolio_service.get_portfolios(session)


@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_portfolio(
    session: dependecies.Session,
    request: Request,
    title: Annotated[str, Form()],
    markdown_description: UploadFile,
    image: UploadFile,
) -> Any:
    try:
        await services.portfolio_service.create_portfolio(
            session, request, title, markdown_description, image
        )
    except services.exceptions.UnsupportedExtension:
        raise HTTPException(
            status.HTTP_415_UNSUPPORTED_MEDIA_TYPE, "The file type must be markdown"
        )


@router.get("/{slug}/html", response_class=HTMLResponse)
async def get_description_as_html(session: dependecies.Session, slug: str):
    try:
        return await services.portfolio_service.get_description_as_html(session, slug)
    except (
        services.exceptions.PortfolioNotFound,
        services.exceptions.MediaFileNotFound,
    ):
        raise HTTPException(status.HTTP_404_NOT_FOUND)


@router.get("/{slug}/image", response_class=FileResponse)
async def get_image(session: dependecies.Session, slug: str) -> Any:
    try:
        return await services.media_files_service.get_media_file_path(
            await services.portfolio_service.get_image_filename(session, slug)
        )
    except (
        services.exceptions.PortfolioNotFound,
        services.exceptions.MediaFileNotFound,
    ):
        raise HTTPException(status.HTTP_404_NOT_FOUND)
