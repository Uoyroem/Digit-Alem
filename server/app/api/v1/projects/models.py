from typing import Annotated

from sqlalchemy.orm import Mapped, mapped_column

from ....models import Base


class Project(Base):
    __tablename__ = "projects"

    id: Mapped[Annotated[int, mapped_column(autoincrement=True, primary_key=True)]]
    slug: Mapped[Annotated[str, mapped_column(primary_key=True, unique=True)]]
    title: Mapped[str]
