import uuid
import pathlib

import mimetypes

import anyio
from fastapi import UploadFile, Request

from . import exceptions
from .. import config


async def upload(
    request: Request,
    file: UploadFile,
    supported_extensions: set[str] | None = None,
) -> str:
    extension = file.filename and pathlib.Path(file.filename).suffix
    if supported_extensions and extension not in supported_extensions:
        raise exceptions.UnsupportedExtensionError()

    filename = str(uuid.uuid4()) + (extension or "")
    file_path = config.settings.media_directory.resolve() / filename
    file_path.parent.mkdir(parents=True, exist_ok=True)
    async with await anyio.open_file(file_path, "xb") as media_file:
        await media_file.write(await file.read())

    return filename


async def get_media_file_path(media_file_path: str) -> pathlib.Path:
    file_path = config.settings.media_directory / media_file_path
    if not file_path.exists():
        raise exceptions.MediaFileNotFoundError
    return file_path
