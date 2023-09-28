from fastapi import FastAPI

from . import api
from .config import settings

app = FastAPI(title=settings.title, version=settings.version)
