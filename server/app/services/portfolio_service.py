from collections.abc import Sequence

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from .. import models


async def get_projects(session: AsyncSession) -> Sequence[models.Portfolio]:
    return (await session.scalars(select(models.Portfolio))).all()
