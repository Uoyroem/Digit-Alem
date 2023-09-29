class ServiceError(Exception):
    pass


class PortfolioServiceError(ServiceError):
    pass


class MediaFilesServiceError(ServiceError):
    pass


class UnsupportedExtension(MediaFilesServiceError):
    pass


class PortfolioNotFound(PortfolioServiceError):
    pass


class MediaFileNotFound(MediaFilesServiceError):
    pass
