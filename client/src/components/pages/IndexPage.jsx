import SliderSection from "../sections/SliderSection";
import AboutSection from "../sections/AboutSection";
import NewsSection from "../sections/NewsSection";
import PortfolioSection from "../sections/PortfolioSection";
import {useState} from "react";


function IndexPage() {
    const [projects, setProjects] = useState([
        {
            name: "Machine Learning",
            imageUrl: ""
        },
        {
            name: "Web, Mobile",
            imageUrl: "https://th.bing.com/th/id/OIP.J6y1rJU7cPoUdYvb2dj9aAHaD4?w=320&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
            name: "IOT",
            imageUrl: "https://th.bing.com/th/id/OIP.BMyYn9I3gRH88VXT2TJxGgHaE7?w=226&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
            name: "HPC",
            imageUrl: "https://th.bing.com/th/id/OIP.M2Cr4sglCvL3FKHXj34kbwHaFj?w=235&h=180&c=7&r=0&o=5&pid=1.7"
        }
    ]);

    const [sliderItems, setSliderItems] = useState([
        {
            imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
            content: (
                <div className="slider-content">
                    <h1 className="slider-content__header">Поможем обогнать своих конкурентов в кризис и стать лидерами
                        на волне послекризисного подъема!</h1>
                    <p className="slider-content__text">Оставьте свои данные и мы предложим вам подходящую стратегию</p>
                </div>
            )
        },
        {
            imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
            content: (
                <div className="slider-content">
                    <h1 className="slider-content__header">Разработка Сайтов и Мобильных приложений</h1>
                    <p className="slider-content__text">Создаем продукты, которые помогают бизнесу расти</p>
                </div>
            )
        }
    ]);

    return (
        <>
            <SliderSection items={sliderItems}/>
            <AboutSection/>
            <NewsSection/>
            <PortfolioSection projects={projects}/>
        </>
    );
}


export default IndexPage;