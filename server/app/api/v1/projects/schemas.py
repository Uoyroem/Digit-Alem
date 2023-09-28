from app.schemas import CamelModel


class Project(CamelModel):
    id: int
    slug: str
    title: str
