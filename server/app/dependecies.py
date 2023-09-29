from typing import Annotated, TypeAlias
from collections.abc import AsyncIterator

from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession


async def get_session() -> AsyncIterator[AsyncSession]:
    from .database import Session

    async with Session() as session:
        yield session


Session: TypeAlias = Annotated[AsyncSession, Depends(get_session)]
