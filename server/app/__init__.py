from fastapi import FastAPI

from .settings import settings


app = FastAPI(title=settings.title, version=settings.version)
