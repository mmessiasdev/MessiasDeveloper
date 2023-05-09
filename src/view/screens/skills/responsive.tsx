import { Container } from "../../components/styeles/container/style";
import ContentSkills from "../../components/contents/skills";
import TitleScreen from "../../components/contents/title";
import ReactImg from '../../assets/skills/React.png';
import FlutterImg from '../../assets/skills/Flutter.png';
import AwsImg from '../../assets/skills/Aws.png';
import AdobeImg from '../../assets/skills/Adobe.png';
import HabilityList from "../../components/contents/habilitylist";
import Footer from "../../components/contents/footer";
import MobilePopup from "../../components/contents/mobilepopup";
import gif from '../../assets/gifs/SkillsPortfolio.gif'



const ResponsiveSkills = () => {

    return (
        <>
            <Container posit="absolute">
                <MobilePopup gif={gif} className="mobilePopup" data-aos="fade-up" data-aos-duration='2000' />
            </Container>
            <Container className="skillsListMobile" overflow="hidden">
                <TitleScreen title={"Skills"} />
                <Container margin="100px 0px 0px 0px">
                    <HabilityList counticons={3} />
                </Container>
                <ContentSkills back="#00D8FF" techtitle="React" nameimg={ReactImg} />
                <ContentSkills back="#00569E" techtitle="Flutter" nameimg={FlutterImg} />
                <ContentSkills back="#FAA11B" techtitle="Aws" nameimg={AwsImg} />
                <ContentSkills back="#ED1C24" techtitle="Adobe" nameimg={AdobeImg} />
                <Footer />
            </Container>
        </>
    );
}

export default ResponsiveSkills;      