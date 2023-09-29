from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column


class Base(DeclarativeBase):
    pass


class Portfolio(Base):
    __tablename__ = "portfolios"

    id: Mapped[int] = mapped_column(autoincrement=True, primary_key=True)
    slug: Mapped[str] = mapped_column(String(30), primary_key=True, unique=True)
    title: Mapped[str]
    markdown_description_filename: Mapped[str]
    image_filename: Mapped[str]
