import pathlib

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    project_directory: pathlib.Path = pathlib.Path(__file__).parent.parent
    model_config = SettingsConfigDict(env_file=project_directory / ".env")
    app_title: str = "Digit Alem"
    app_version: str = "0.1.0"
    database_dsn: str = ""
    media_directory: pathlib.Path = project_directory / "media"
    cors_allow_origins: list[str] = ["*"]


settings = Settings()
