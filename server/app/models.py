from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship


class Base(DeclarativeBase):
    pass


class Portfolio(Base):
    __tablename__ = "portfolios"

    slug: Mapped[str] = mapped_column(String, primary_key=True, unique=True)
    title: Mapped[str]
    html_description_url: Mapped[str]
    image_url: Mapped[str]
    markdown_description_filename: Mapped[str]
    image_filename: Mapped[str]

    projects: Mapped[list["Project"]] = relationship()


class Project(Base):
    __tablename__ = "projects"

    slug: Mapped[str] = mapped_column(String, primary_key=True, unique=True)
    portfolio_slug: Mapped[str] = mapped_column(
        ForeignKey("portfolios.slug", ondelete="CASCADE")
    )
    title: Mapped[str]
    html_description_url: Mapped[str]
    markdown_description_filename: Mapped[str]
