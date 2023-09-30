from pydantic import BaseModel, computed_field
from pydantic.alias_generators import to_camel


class CamelModel(BaseModel):
    class Config:
        alias_generator = to_camel
        populate_by_name = True


class Portfolio(CamelModel):
    id: int

    html_description_url: str
    image_url: str

    slug: str
    title: str
