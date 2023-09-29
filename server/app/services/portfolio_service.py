import markdown
from collections.abc import Sequence

import anyio
from slugify import slugify
from fastapi import UploadFile, Request
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import IntegrityError

from . import media_files_service, exceptions

from .. import models


async def get_portfolios(session: AsyncSession) -> Sequence[models.Portfolio]:
    return (await session.scalars(select(models.Portfolio))).all()


async def create_portfolio(
    session: AsyncSession,
    request: Request,
    title: str,
    markdown_description: UploadFile,
    image: UploadFile,
) -> models.Portfolio:
    markdown_description_filename = await media_files_service.upload(
        request, markdown_description, {".md"}
    )
    image_filename = await media_files_service.upload(request, image, {".jpg", ".png"})
    slug = slugify(title)
    portfolio = models.Portfolio(
        slug=slug,
        title=title,
        html_description_url=str(request.url_for("get_description_as_html", slug=slug)),
        image_url=str(request.url_for("get_image", slug=slug)),
        markdown_description_filename=markdown_description_filename,
        image_filename=image_filename,
    )

    session.add(portfolio)
    try:
        await session.commit()
    except IntegrityError:
        raise exceptions.PortfolioExistsError()
    return portfolio


async def get_description_as_html(session: AsyncSession, slug: str) -> str:
    portfolio = await session.scalar(
        select(models.Portfolio).where(models.Portfolio.slug == slug)
    )
    if portfolio is None:
        raise exceptions.PortfolioNotFoundError
    path = await media_files_service.get_media_file_path(
        portfolio.markdown_description_filename
    )

    async with await anyio.open_file(path) as file:
        return markdown.markdown(await file.read())


async def get_image_filename(session: AsyncSession, slug: str) -> str:
    portfolio = await session.scalar(
        select(models.Portfolio).where(models.Portfolio.slug == slug)
    )
    if portfolio is None:
        raise exceptions.PortfolioNotFoundError
    return portfolio.image_filename
