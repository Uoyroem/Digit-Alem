import { useState } from "react";
import SliderSection from "./sections/SliderSection";
import NewsSection from "./sections/NewsSection";
import PortfolioSection from "./sections/PortfolioSection";

function Main(props) {
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
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    ]);
    return (
        <main {...props}>
            <SliderSection items={sliderItems} />
            <NewsSection />
            <PortfolioSection projects={projects} />
        </main>
    );
}

export default Main;