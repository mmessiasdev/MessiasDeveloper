import { Container } from "../../components/styeles/container/style";
import ContentSkills from "../../components/contents/skills";
import TitleScreen from "../../components/contents/title";


import ReactImg from '../../assets/skills/React.png';
import FlutterImg from '../../assets/skills/Flutter.png';
import AwsImg from '../../assets/skills/Aws.png';
import AdobeImg from '../../assets/skills/Adobe.png';
import HabilityList from "../../components/contents/habilitylist";
import ScreenTransition from "../../components/contents/screentransition";
import { useEffect, useState } from "react";
import Footer from "../../components/contents/footer";
import ResponsiveSkills from "./responsive";


const Skills = () => {

    const [initPage, setInitPage] = useState(false);


    useEffect(() => {
        setInitPage(true);
        setTimeout(() => {
            setInitPage(false)
        }, 2500)
    }, [])


    return (
        <>
            <Container className="skillsListDesktop">
                {
                    initPage ? <div>
                        <ScreenTransition />
                    </div> :
                        <Container width="100%">
                            <TitleScreen title={"Skills"} />

                            <HabilityList counticons={10} />

                            <ContentSkills back="#00D8FF" techtitle="React" nameimg={ReactImg} />

                            <ContentSkills back="#00569E" techtitle="Flutter" nameimg={FlutterImg} />

                            <ContentSkills back="#FAA11B" techtitle="Aws" nameimg={AwsImg} />

                            <ContentSkills back="#ED1C24" techtitle="Adobe" nameimg={AdobeImg} />
                            <Footer />

                        </Container>
                }

            </Container>
            <ResponsiveSkills />
        </>
    );
}

export default Skills;      