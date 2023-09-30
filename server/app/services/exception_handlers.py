from fastapi import Request, status
from fastapi.responses import JSONResponse

from . import exceptions


def not_found_error_handler(
    request: Request, exception: exceptions.NotFoundError
) -> JSONResponse:
    return JSONResponse({"detail": str(exception)}, status.HTTP_404_NOT_FOUND)
