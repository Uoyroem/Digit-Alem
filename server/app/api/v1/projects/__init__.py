from typing import Any

from fastapi import APIRouter

from . import schemas, services, models
from .... import dependecies

router = APIRouter(prefix="/projects")


@router.get("/", response_model=list[schemas.Project])
async def get_projects(session: dependecies.Session) -> Any:
    return await services.get_projects(session)
