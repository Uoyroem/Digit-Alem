
import { useRef, useState } from "react";
import "./SliderSection.scss";
import IconButton from "../ui/IconButton";

function SliderSection({ items }) {
    const sliderItems = useRef();
    const [current, setCurrent] = useState(0);

    function scrollIntoView(current) {
        sliderItems.current.children[current].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    function next() {
        setCurrent(current => {
            current = (current + 1) % items.length;
            scrollIntoView(current);
            return current;
        });
    }

    function previous() {
        setCurrent(current => {
            current = (current || items.length) - 1;
            scrollIntoView(current);
            return current;
        });
    }

    return (
        <section className="slider-section" id="slider-section">
            <div className="slider__content-and-buttons">
                <IconButton onClick={previous}>keyboard_arrow_left</IconButton>
                <div className="slider__content">
                    {items[current].content}
                </div>
                <IconButton onClick={next}>keyboard_arrow_right</IconButton>
            </div>
            <div className="slider">
                <div ref={sliderItems} className="slider__items">
                    {items.map((item, index) => (
                        <div key={index} className="slider__item">
                            <div className="slider__img" style={{ backgroundImage: `url(${item.imageUrl})` }} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}


export default SliderSection;