from typing import Any, BinaryIO

from fastapi import APIRouter, HTTPException, status
from fastapi.responses import FileResponse

from .. import services

router = APIRouter()


@router.get("/media/{media_file_path:path}", response_class=FileResponse)
async def get_media_file(media_file_path: str) -> Any:
    try:
        return await services.media_files_service.get_media_file_path(media_file_path)
    except services.exceptions.MediaFileNotFoundError:
        raise HTTPException(status.HTTP_404_NOT_FOUND)
