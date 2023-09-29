from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file="../.env")
    app_title: str = "Digit Alem"
    app_version: str = "0.1.0"
    database_dsn: str | None = None


settings = Settings()
