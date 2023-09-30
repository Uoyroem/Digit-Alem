class ServiceError(Exception):
    pass


class PortfolioServiceError(ServiceError):
    pass


class MediaFilesServiceError(ServiceError):
    pass


class UnsupportedExtensionError(MediaFilesServiceError):
    pass


class NotFoundError(ServiceError):
    def __init__(self, what_not_found: str | None = None) -> None:
        super().__init__(
            "Not Found" + (" - " + what_not_found if what_not_found else "")
        )


class PortfolioNotFoundError(NotFoundError, PortfolioServiceError):
    def __init__(self) -> None:
        super().__init__("Portfolio")


class PortfolioExistsError(PortfolioServiceError):
    pass


class MediaFileNotFoundError(NotFoundError, MediaFilesServiceError):
    def __init__(self) -> None:
        super().__init__("Media File")
