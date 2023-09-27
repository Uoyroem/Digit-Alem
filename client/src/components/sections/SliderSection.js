
import { useEffect, useRef, useState } from "react";
import "./SliderSection.scss";
import IconButton from "../ui/IconButton";

function SliderSection({ items }) {
    const sliderItems = useRef();
    const [current, setCurrent] = useState(0);



    function next() {
        setCurrent(current => {
            current = (current + 1) % items.length;
            sliderItems.current.children[current].scrollIntoView();
            return current;
        });
    }

    function previous() {

    }

    return (
        <section className="slider-section" id="slider-section">
            <div className="slider__buttons">
                <IconButton onClick={previous}>keyboard_arrow_left</IconButton>
                <IconButton onClick={next}>keyboard_arrow_right</IconButton>
            </div>
            <div className="slider">

                <div ref={sliderItems} className="slider__items">
                    {items.map(item => (
                        <div className="slider__item">
                            <div className="slider__content">

                            </div>
                            <div className="slider__img" style={{ backgroundImage: `url(${item})` }} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}


export default SliderSection;