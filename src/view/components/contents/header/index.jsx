import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp, IoMdDocument } from 'react-icons/io';
import Tilt from '../../styeles/animatedcard';
import { RoundedContainer } from "../../styeles/roundedcontainer/style";
import { Container, ContainerColorTheme } from "../../styeles/container/style";
import CurriculumButtom from "../currriculumbuttom";
import BaseText from "../typography";
import { FaGithub } from "react-icons/fa";
import { SecudnaryButton } from "../../styeles/secundarybutton/style";
import { Avatar } from "@mui/material";


const Header = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);


  const getProduct = async (url) => {
    const res = await fetch(url)
    const data = await res.json();
    setProduct(data);
    console.log(data);
  }

  useEffect(() => {
    const productUrl = "https://api.github.com/users/mmessiasdev";
    getProduct(productUrl);
    console.log(productUrl);
  }, [])

  const options = {
    scale: 1.1,
    speed: 1000,
    max: 30,
  };

  return (
    <>
      <Container height="100vh" width="200px" className="header" data-aos="fade-right" data-aos-delay="500" data-aos-duration='1000'>
        <Container width="200px" />
        <ContainerColorTheme disp="flex" direc="column" justify="space-between" index="50" pad="0px 0px 0px 0px" height="100vh" width="200px" posit="fixed">
          <Container className='curriculum' disp='flex' justify='start' >
            <Container disp='flex' direc='column' justify='space-between' aligh="start">
              <RoundedContainer margin='40px 0px 0px 0px' radius='0px 15px 15px 0px' pad='10px 20px' aligh='center' justify='center' data-aos="fade-right" data-aos-delay="1200" data-aos-duration='1500'>
                <Container height='80px' disp='flex' aligh='center' justify='center'>
                  <CurriculumButtom title={<h2>Currículo</h2>} icon={<IoMdDocument size={30} />} route={"/portfolio/curriculumlanguage"} />
                </Container>
              </RoundedContainer>
            </Container>
          </Container>
          <Container width="100%" pad="20px 15px">
            <BaseText tag="h3">Github Scores</BaseText>
            {product &&
              <>
                <Container pad="35px 0px">
                  <Container pad="5px 0px">
                    <Avatar src={`${product.avatar_url}`} />


                  </Container>
                  <BaseText tag="h5">@{product.login}</BaseText>
                  <BaseText tag="h3">{product.name}</BaseText>
                  <BaseText tag="h4">{product.public_repos} repositórios</BaseText>
                  <BaseText tag="h4">{product.location}</BaseText>
                </Container>
              </>
            }
            <Container width="100%" disp="flex" justify="start">
              <FaGithub size={20} />
              <Container disp="flex" aligh="center" pad="0px 5px">Github Api</Container>
            </Container>

          </Container>
          <Container>
            <Link to="/portfolio/projects" >
              <RoundedContainer margin="20px" radius="5px" disp="flex" pad="5px 0px">
                <SecudnaryButton><BaseText tag="h3">Projetos</BaseText></SecudnaryButton>
              </RoundedContainer>

            </Link>
            <Link to="/portfolio/skills">
              <RoundedContainer margin="20px" radius="5px" pad="5px 0px">
                <SecudnaryButton><BaseText tag="h3">Skills</BaseText></SecudnaryButton>
              </RoundedContainer>

            </Link>
          </Container>
          <Container disp='flex' justify='space-between' aligh='center' width="100%" pad='15px 15px'>
            <Tilt options={options}>
              <a href='https://github.com/mmessiasdev/' target="_blank" rel="noreferrer">
                <AiFillGithub data-aos="fade-up" data-aos-delay="1500" data-aos-duration='1000' size={30} />
              </a>
            </Tilt >
            <Tilt options={options}>
              <a href='https://www.linkedin.com/in/mmessiasdev/' target="_blank" rel="noreferrer">
                <AiFillLinkedin data-aos="fade-up" data-aos-delay="1500" data-aos-duration='1200' size={30} />

              </a>
            </Tilt>
            <Tilt options={options}>
              <a href='https://www.instagram.com/mmessiasdev/' target="_blank" rel="noreferrer">
                <AiFillInstagram data-aos="fade-up" data-aos-delay="1500" data-aos-duration='1400' size={30} />

              </a>
            </Tilt>
            <Tilt options={options}>
              <a href='https://api.whatsapp.com/send?phone=5577991057040' target="_blank" rel="noreferrer">
                <IoLogoWhatsapp data-aos="fade-up" data-aos-delay="1500" data-aos-duration='1400' size={30} />

              </a>
            </Tilt>
          </Container>

        </ContainerColorTheme>

      </Container>


    </>
  )

}

export default Header;