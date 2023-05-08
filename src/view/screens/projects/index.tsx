import { useEffect, useState } from "react";
import { Container } from "../../components/styeles/container/style";
import ScreenTransition from "../../components/contents/screentransition";
import TitleScreen from "../../components/contents/title";
import Footer from "../../components/contents/footer";
import ResponsiveProjects from "./responsive";
import ProjectBanner from "../../components/contents/projects/projbanner";
import PinnedProj from "../../components/contents/projects/pinnedproj/pinnedproj";
import ProjLargeList from "../../components/contents/projects/projlargelist";
import Header from "../../components/contents/header";
import AllRepositories from "../../components/contents/projects/allrepositories";

const Projects = () => {

  const [initPage, setInitPage] = useState(false);


  useEffect(() => {
    setInitPage(true);
    setTimeout(() => {
      setInitPage(false)
    }, 2500)
  }, [])

  return (
    <>
      <Container className="desktopProject">
        {
          initPage ? <div>
            <ScreenTransition />
          </div> :
            <Container disp="flex" justify="space-between">
              <Header />
              <Container pad="0px 5%">
                <TitleScreen title={"Projetos"} />
                <Container data-aos="fade-top" data-aos-delay="0" data-aos-duration='1000'>
                  <PinnedProj />
                </Container>
                <Container data-aos="fade-top" data-aos-delay="0" data-aos-duration='1000'>
                  <ProjectBanner />

                </Container>
                <ProjLargeList />
                <AllRepositories />
                <Footer />
              </Container>
            </Container>
        }
      </Container>
      <ResponsiveProjects />
    </>
  );
}

export default Projects;