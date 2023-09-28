from fastapi import APIRouter

from . import projects

router = APIRouter(prefix="/v1")
router.include_router(projects.router)
