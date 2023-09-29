class ServiceError(Exception):
    pass


class PortfolioServiceError(ServiceError):
    pass


class MediaFilesServiceError(ServiceError):
    pass


class UnsupportedExtensionError(MediaFilesServiceError):
    pass


class NotFoundError(ServiceError):
    pass


class PortfolioNotFoundError(NotFoundError, PortfolioServiceError):
    pass


class PortfolioExistsError(PortfolioServiceError):
    pass


class MediaFileNotFoundError(NotFoundError, MediaFilesServiceError):
    pass
