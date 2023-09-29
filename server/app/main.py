from fastapi import FastAPI, APIRouter

from . import routers
from .config import settings


api = APIRouter(prefix="/api")
api.include_router(routers.portfolio_router.router)

app = FastAPI(title=settings.app_title, version=settings.app_version)
app.include_router(api)
