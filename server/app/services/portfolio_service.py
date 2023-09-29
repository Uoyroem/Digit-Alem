import markdown
from collections.abc import Sequence

import anyio
from slugify import slugify
from fastapi import UploadFile, Request
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

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
) -> None:
    markdown_description_filename = await media_files_service.upload(
        request, markdown_description, {".md"}
    )
    image_filename = await media_files_service.upload(request, image, {".jpg", ".png"})
    portfolio = models.Portfolio(
        slug=slugify(title),
        title=title,
        markdown_description_filename=markdown_description_filename,
        image_filename=image_filename,
    )
    session.add(portfolio)
    await session.commit()


async def get_description_as_html(session: AsyncSession, slug: str) -> str:
    portfolio = await session.scalar(
        select(models.Portfolio).where(models.Portfolio.slug == slug)
    )
    if portfolio is None:
        raise exceptions.PortfolioNotFound
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
        raise exceptions.PortfolioNotFound
    return portfolio.image_filename
