import { useEffect, useState } from 'react';
import WallpaperImg from '../../assets/wallpaper.png'
import { IoMdDocument } from 'react-icons/io';
import { SecudnaryButton } from '../../components/styeles/secundarybutton/style';
import { Container } from '../../components/styeles/container/style';
import { Wallpaper } from '../../components/styeles/wallapaper/style';
import { InitialButtons } from '../../components/styeles/primarybutton/style';
import { RoundedContainer } from '../../components/styeles/roundedcontainer/style';
import Tilt from '../../components/styeles/animatedcard';
import { Link } from 'react-router-dom';
import { Blur } from '../../components/styeles/blurcontainer/style';
import CurriculumButtom from '../../components/contents/currriculumbuttom';
import { FaReact } from 'react-icons/fa';


const ResponsiveHome = () => {
    const [initPage, setInitPage] = useState(false);
    const [isShownP, setIsShownP] = useState(false);
    const [isShownS, setIsShownS] = useState(false);

    useEffect(() => {
        setInitPage(true);
        setTimeout(() => {
            setInitPage(false)
        }, 6000)
    }, [])

    const options = {
        scale: 1.1,
        speed: 1000,
        max: 30,
    };
    return (
        <>
            <Container className='mobileHome' disp='flex' direc='column' width='100%' height='100vh' justify='center' aligh='center' overflow='hidden'>
                <Container className='homewallpaper' data-aos="zoom-out" data-aos-delay="0" data-aos-duration='2000' disp='flex' width='30%' justify='end' aligh='end' index='-10'>
                    <Wallpaper className='homewallpaperImg' src={WallpaperImg} />
                </Container>
                <Blur width='90%' data-aos="fade-right" data-aos-delay="0" data-aos-duration='500'>
                    <Container pad='0px 0px 50px 0px' data-aos="fade" data-aos-duration='2000' data-aos-delay="1000">
                        <h3>M. Messias</h3>
                        <h5>Developer and Software Engineer</h5>
                    </Container>
                    <Container>
                        <Tilt options={options}>
                            <Link to="/Projects">
                                <InitialButtons data-aos="fade-up" data-aos-duration='500' data-aos-delay="500" top='50px' radius='40px 40px 40px 40px' index='0' onMouseEnter={() => setIsShownP(true)} onMouseLeave={() => setIsShownP(false)}>
                                    <h2>Projetos</h2>
                                </InitialButtons>
                            </Link>
                        </Tilt>
                        <Tilt options={options}>
                            <Link to="/Skills">
                                <InitialButtons data-aos="fade-up" data-aos-delay="500" data-aos-duration='1000' top='-50px' radius='40px 40px 40px 40px' onMouseEnter={() => setIsShownS(true)} onMouseLeave={() => setIsShownS(false)}>
                                    <h2>Skills</h2>
                                </InitialButtons >
                            </Link>
                        </Tilt>
                    </Container>

                    <RoundedContainer margin='40px 0px' disp='flex' justify='center' aligh='center' radius='20px' pad='20px' data-aos="fade-up" data-aos-delay="1000" data-aos-duration='1000'>
                        <Container height='50px' disp='flex' aligh='center' justify='center'>
                            <CurriculumButtom title={<h2>Currículo</h2>} icon={<IoMdDocument size={30} />} route={"/curriculumlanguage"} />

                        </Container>

                    </RoundedContainer>

                </Blur>
            </Container>
        </>

    )
}

export default ResponsiveHome;