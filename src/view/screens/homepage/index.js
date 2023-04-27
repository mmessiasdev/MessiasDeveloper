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
import { Link } from 'react-router-dom';
import CurriculumButtom from '../../components/contents/currriculumbuttom';
import gif from '../../assets/gifs/HomePagePortfólio.gif'
import { Blur } from '../../components/styeles/blurcontainer/style';
import MobilePopup from '../../components/contents/mobilepopup';



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
                                <Container className='curriculum' disp='flex' width='30%' justify='start' >
                                    <Container disp='flex' direc='column' justify='space-between' height='100vh'>
                                        <RoundedContainer margin='120px 0px 0px 0px' radius='0px 15px 15px 0px' pad='10px 30px' aligh='center' justify='center' data-aos="fade-right" data-aos-delay="1200" data-aos-duration='1500'>
                                            <Container height='80px' disp='flex' aligh='center' justify='center'>
                                                <CurriculumButtom title={<h2>Currículo</h2>} icon={<IoMdDocument size={30} />} route={"/curriculumlanguage"} />

                                            </Container>

                                        </RoundedContainer>

                                        <Container disp='flex' justify='space-between' aligh='center' width='200px' pad='10px 10px'>
                                            <Tilt options={options}>
                                                <a href='https://github.com/mmessiasdev/'>
                                                    <AiFillGithub data-aos="fade-up" data-aos-delay="1500" data-aos-duration='1000' size={30} />
                                                </a>
                                            </Tilt >
                                            <Tilt options={options}>
                                                <a href='https://www.linkedin.com/in/mmessiasdev/' target="_blank">
                                                    <AiFillLinkedin data-aos="fade-up" data-aos-delay="1500" data-aos-duration='1200' size={30} />

                                                </a>
                                            </Tilt>
                                            <Tilt options={options}>
                                                <a href='https://www.instagram.com/mmessiasdev/' target="_blank">
                                                    <AiFillInstagram data-aos="fade-up" data-aos-delay="1500" data-aos-duration='1400' size={30} />

                                                </a>
                                            </Tilt>
                                            <Tilt options={options}>
                                                <a href='https://api.whatsapp.com/send?phone=5577991057040' target="_blank">
                                                    <IoLogoWhatsapp data-aos="fade-up" data-aos-delay="1500" data-aos-duration='1400' size={30} />

                                                </a>
                                            </Tilt>
                                        </Container>

                                    </Container>
                                </Container>

                                <Container className='initialbuttons' disp='flex' width='40%' justify='center' aligh='center'>
                                    <Tilt options={options}>
                                        <Link to="/Projects">
                                            <InitialButtons data-aos="fade-up" data-aos-duration='1500' top='50px' radius='40px 40px 40px 40px' index='0' onMouseEnter={() => setIsShownP(true)} onMouseLeave={() => setIsShownP(false)}>
                                                <h2>Projetos</h2>
                                            </InitialButtons>
                                        </Link>
                                    </Tilt>


                                    <Tilt options={options}>
                                        <Link to="/Skills">
                                            <InitialButtons data-aos="fade-down" data-aos-delay="500" data-aos-duration='1000' top='-50px' radius='40px 40px 40px 40px' onMouseEnter={() => setIsShownS(true)} onMouseLeave={() => setIsShownS(false)}>
                                                <h2>Skills</h2>
                                            </InitialButtons >
                                        </Link>
                                    </Tilt>
                                </Container>

                                <Container className='homewallpaper' data-aos="zoom-out" data-aos-delay="0" data-aos-duration='2000' disp='flex' width='30%' justify='end' aligh='end' index='-10'>
                                    <Wallpaper className='homewallpaperImg' src={WallpaperImg} />
                                </Container>
                            </OverItens>

                        </div>
                }
            </Container>
            <Container className='mobileHome' disp='flex' direc='column' width='100%' height='100vh' justify='center' aligh='center' overflow='hidden'>
                <Container className='homewallpaper' disp='flex' width='30%' justify='end' aligh='end' index='-10'>
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

                <MobilePopup gif={gif} className="mobilePopup" data-aos="fade-up" data-aos-duration='2000' />
            </Container>
        </>
    );
    
}

export default HomePage;