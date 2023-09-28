from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from ....models import Base


class Project(Base):
    __tablename__ = "projects"

    id: Mapped[int] = mapped_column(autoincrement=True, primary_key=True)
    slug: Mapped[str] = mapped_column(String(30), primary_key=True, unique=True)
    title: Mapped[str]
    markdown_description_url: Mapped[str]
