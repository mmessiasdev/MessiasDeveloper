import WallpaperImg from '../../assets/wallpaper.png'
import { IoMdDocument } from 'react-icons/io';
import { Container } from '../../components/styeles/container/style';
import { Wallpaper } from '../../components/styeles/wallapaper/style';
import { InitialButtons } from '../../components/styeles/primarybutton/style';
import { RoundedContainer } from '../../components/styeles/roundedcontainer/style';
import Tilt from '../../components/styeles/animatedcard';
import { Link } from 'react-router-dom';
import gif from '../../assets/gifs/HomePagePortfólio.gif'
import { Blur } from '../../components/styeles/blurcontainer/style';
import CurriculumButtom from '../../components/contents/currriculumbuttom';
import MobilePopup from '../../components/contents/mobilepopup';


const ResponsiveHome = () => {
    const options = {
        scale: 1,
        speed: 1000,
        max: 30,
    };
    return (
        <>
            <Container disp='flex' direc='column' width='100%' height='100vh' justify='center' aligh='center' overflow='hidden' className="mobileHome">
                <Container className='homewallpaper' disp='flex' width='100%' justify='end' aligh='end' index='-10'>
                    <Wallpaper className='homewallpaperImg' src={WallpaperImg} />
                </Container>
                <Blur width='90%' data-aos="fade-right" data-aos-delay="0" data-aos-duration='500'>
                    <Container pad='0px 0px 50px 0px' data-aos="fade" data-aos-duration='2000' data-aos-delay="1000">
                        <h3>M. Messias</h3>
                        <h5>Developer and Software Engineer</h5>
                    </Container>
                    <Container>
                        <Tilt options={options}>
                            <Link to="/portfolio/projects">
                                <InitialButtons data-aos="fade-up" data-aos-duration='500' data-aos-delay="500" top='50px' radius='40px 40px 40px 40px' index='0'>
                                    <h2>Projetos</h2>
                                </InitialButtons>
                            </Link>
                        </Tilt>
                        <Tilt options={options}>
                            <Link to="/portfolio/skills">
                                <InitialButtons data-aos="fade-up" data-aos-delay="500" data-aos-duration='1000' top='-50px' radius='40px 40px 40px 40px'>
                                    <h2>Skills</h2>
                                </InitialButtons >
                            </Link>
                        </Tilt>
                    </Container>

                    <RoundedContainer margin='40px 0px' disp='flex' justify='center' aligh='center' radius='20px' pad='20px' data-aos="fade-up" data-aos-delay="1000" data-aos-duration='1000'>
                        <Container height='50px' disp='flex' aligh='center' justify='center'>
                            <CurriculumButtom title={<h2>Currículo</h2>} icon={<IoMdDocument size={30} />} route={"/portfolio/curriculumlanguage"} />

                        </Container>

                    </RoundedContainer>

                </Blur>
               
                <MobilePopup gif={gif} className="mobilePopup" data-aos="fade-up" data-aos-duration='2000' />
            </Container>
        </>

    )
}

export default ResponsiveHome;