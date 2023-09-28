from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker

from .config import settings

engine = create_async_engine(settings.database_url, echo=True)
Session = async_sessionmaker(engine)
