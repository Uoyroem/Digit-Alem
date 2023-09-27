import Container from "./Container";


function Section({title = null, children, ...props}) {
    return (
        <section {...props}>
            <Container>
                <div>
                    {title && <header>
                        <h1>{title}</h1>
                    </header>}
                    {children}
                </div>
            </Container>
        </section>
    );
}


export default Section;
