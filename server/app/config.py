from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file="../.env")
    title: str = "Digit Alem"
    version: str = "0.1.0"
    database_url: str = "postgresql+psycopg://postgres:12345678@localhost:5432/digit_alem"


settings = Settings()
