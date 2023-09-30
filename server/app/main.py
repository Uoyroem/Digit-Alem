from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware

from . import routers, services
from .config import settings


api = APIRouter(prefix="/api")
api.include_router(routers.portfolio_router.router)

app = FastAPI(title=settings.app_title, version=settings.app_version)
app.include_router(api)
app.include_router(routers.media_files_router.router)
app.add_exception_handler(
    services.exceptions.NotFoundError,
    services.exception_handlers.not_found_error_handler,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_allow_origins,
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)
