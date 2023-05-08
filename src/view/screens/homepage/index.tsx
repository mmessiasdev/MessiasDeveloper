import { useEffect, useState } from 'react';
import WallpaperImg from '../../assets/wallpaper.png'
import ProjectsImg from '../../assets/projects.jpg'
import SkillsImg from '../../assets/skills.jpg'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp, IoMdDocument } from 'react-icons/io';
import InitialAnimation from '../../components/contents/initialanimation';
import { OverItens } from '../../components/styeles/alights/style';
import { Container } from '../../components/styeles/container/style';
import { DivFade, Wallpaper, WallpaperHover, WallpaperImage } from '../../components/styeles/wallapaper/style';
import { InitialButtons } from '../../components/styeles/primarybutton/style';
import { RoundedContainer } from '../../components/styeles/roundedcontainer/style';
import Tilt from '../../components/styeles/animatedcard';
import { Link, useParams } from 'react-router-dom';
import CurriculumButtom from '../../components/contents/currriculumbuttom';
import ResponsiveHome from './responsive';
import UserGit from '../../components/contents/header';
import Header from '../../components/contents/header';


const HomePage = () => {
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
            <Container className='desktopHome'>
                {
                    initPage ?
                        <div>
                            <InitialAnimation />
                        </div> :
                        <div>
                            {isShownP && (
                                <WallpaperHover justify='start'>
                                    <WallpaperImage src={ProjectsImg} />
                                    <DivFade deg='90deg'></DivFade>
                                </WallpaperHover>
                            )}
                            {isShownS && (
                                <WallpaperHover justify='end'>
                                    <WallpaperImage src={SkillsImg} />
                                    <DivFade deg='270deg'></DivFade>

                                </WallpaperHover>
                            )}
                            <OverItens justify='space-between'>
                                <Container className='curriculum' disp='flex' justify='start' >
                                    <Header/>
                                </Container>

                                <Container className='initialbuttons' posit='fixed' disp='flex' width='100%' justify='center' aligh='center' index='11'>
                                    <Tilt options={options}>
                                        <Link to="/portfolio/projects">
                                            <InitialButtons data-aos="fade-up" data-aos-duration='1500' top='50px' radius='40px 40px 40px 40px' index='0' onMouseEnter={() => setIsShownP(true)} onMouseLeave={() => setIsShownP(false)}>
                                                <h2>Projetos</h2>
                                            </InitialButtons>
                                        </Link>
                                    </Tilt>


                                    <Tilt options={options}>
                                        <Link to="/portfolio/skills">
                                            <InitialButtons data-aos="fade-down" data-aos-delay="500" data-aos-duration='1000' top='-50px' radius='40px 40px 40px 40px' onMouseEnter={() => setIsShownS(true)} onMouseLeave={() => setIsShownS(false)}>
                                                <h2>Skills</h2>
                                            </InitialButtons >
                                        </Link>
                                    </Tilt>
                                </Container>

                                <Container className='homewallpaper' data-aos="zoom-out" data-aos-delay="0" data-aos-duration='2000' disp='flex' justify='end' aligh='end' index='10'>
                                    <Wallpaper className='homewallpaperImg' src={WallpaperImg} />
                                </Container>
                            </OverItens>

                        </div>
                }
            </Container>
            <ResponsiveHome />
        </>
    );

}

export default HomePage;