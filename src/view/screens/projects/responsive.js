import { useEffect, useState } from "react";
import { Container } from "../../components/styeles/container/style";
import TitleScreen from "../../components/contents/title";
import Footer from "../../components/contents/footer";
import ProjectsList from "../../components/contents/projectslist";

const ResponsiveProjects = () => {

    const [initPage, setInitPage] = useState(false);


    useEffect(() => {
        setInitPage(true);
        setTimeout(() => {
            setInitPage(false)
        }, 2500)
    }, [])

    return (
        <>
            <Container className="mobileProject" overflow="hidden">
                <Container width="100%" disp="flex" direc="column" justify="center" aligh="center">
                    <TitleScreen title={"Projects"} />
                    <ProjectsList/>
                    <Footer />
                </Container>
            </Container>
        </>
    );
}

export default ResponsiveProjects;