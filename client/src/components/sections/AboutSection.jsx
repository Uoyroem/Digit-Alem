import "./AboutSection.scss";
import {SectionWithHeader} from "./Section";

function AboutSection() {
    return (
        <SectionWithHeader id="about-section" title="О компаний" titleClassName="about-section__title">
            <div className="about-section__content">
                <p className="about-section__content-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis ipsa expedita, recusandae fugit sunt laudantium eius cum saepe exercitationem velit neque
                    possimus est! Odio assumenda ducimus consectetur rerum molestias similique. Corporis qui dolore
                    voluptatum odit voluptas explicabo libero impedit a.
                </p>
                <div className="about-section__content-info-list">
                    <div className="about-section__content-info">
                        <span className="material-icons about-section__content-info-icon">cloud</span>
                        <div>
                            <h3 className="about-section__content-info-header">+200</h3>
                            <p className="about-section__content-info-text">Разработанных сайтов</p>
                        </div>
                    </div>
                    <div className="about-section__content-info">
                        <span className="material-icons about-section__content-info-icon">coffee</span>
                        <div>
                            <h3 className="about-section__content-info-header">20</h3>
                            <p className="about-section__content-info-text">Человек в команде</p>
                        </div>
                    </div>
                    <div className="about-section__content-info">
                        <span className="material-icons about-section__content-info-icon">person</span>
                        <div>
                            <h3 className="about-section__content-info-header">25</h3>
                            <p className="about-section__content-info-text">Постоянных клиентов</p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWithHeader>
    );
}

export default AboutSection;