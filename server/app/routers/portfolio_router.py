from typing import Any

from fastapi import APIRouter

from .. import schemas, dependecies, services


router = APIRouter(prefix="/projects")


@router.get("/", response_model=list[schemas.Project])
async def get_projects(session: dependecies.Session) -> Any:
    return await services.portfolio_service.get_projects(session)
