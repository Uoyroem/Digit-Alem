import markdown
from collections.abc import Sequence

import anyio
from slugify import slugify
from fastapi import UploadFile, Request
from sqlalchemy import select
from sqlalchemy.orm import selectinload
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import IntegrityError
from psycopg import errors

from . import media_files_service, exceptions

from .. import models


async def get_portfolios(session: AsyncSession) -> Sequence[models.Portfolio]:
    return (
        await session.scalars(
            select(models.Portfolio).options(selectinload(models.Portfolio.projects))
        )
    ).all()


async def get_project(
    session: AsyncSession, portfolio_slug: str, slug: str
) -> models.Project:
    project = await session.scalar(
        select(models.Project).where(
            models.Project.portfolio_slug == portfolio_slug, models.Project.slug == slug
        )
    )
    if project is None:
        raise exceptions.ProjectNotFoundError
    return project


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


async def create_project(
    session: AsyncSession,
    request: Request,
    portfolio_slug: str,
    title: str,
    markdown_description: UploadFile,
) -> models.Project:
    markdown_description_filename = await media_files_service.upload(
        request, markdown_description, {".md"}
    )

    slug = slugify(title)
    project = models.Project(
        title=title,
        slug=slug,
        html_description_url=str(
            request.url_for(
                "get_project_description_as_html",
                portfolio_slug=portfolio_slug,
                slug=slug,
            )
        ),
        portfolio_slug=portfolio_slug,
        markdown_description_filename=markdown_description_filename,
    )

    session.add(project)
    try:
        await session.commit()
    except IntegrityError as error:
        if isinstance(error.orig, errors.ForeignKeyViolation):
            raise exceptions.PortfolioNotFoundError
        raise exceptions.ProjectExistsError
    return project


async def get_portfolio(session: AsyncSession, slug: str) -> models.Portfolio:
    portfolio = await session.scalar(
        select(models.Portfolio)
        .where(models.Portfolio.slug == slug)
        .options(selectinload(models.Portfolio.projects))
    )
    if portfolio is None:
        raise exceptions.PortfolioNotFoundError
    return portfolio


async def get_description_as_html(session: AsyncSession, slug: str) -> str:
    portfolio = await get_portfolio(session, slug)
    path = await media_files_service.get_media_file_path(
        portfolio.markdown_description_filename
    )

    async with await anyio.open_file(path) as file:
        return markdown.markdown(await file.read())


async def get_project_description_as_html(
    session: AsyncSession, portfolio_slug: str, slug: str
) -> str:
    project = await get_project(session, portfolio_slug, slug)
    path = await media_files_service.get_media_file_path(
        project.markdown_description_filename
    )
    async with await anyio.open_file(path) as file:
        return markdown.markdown(await file.read())


async def get_image_filename(session: AsyncSession, slug: str) -> str:
    portfolio = await get_portfolio(session, slug)
    return portfolio.image_filename
