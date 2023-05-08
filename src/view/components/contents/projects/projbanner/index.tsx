import { BannerProject, Container } from "../../../styeles/container/style"
import BaseText from "../../typography";
import wallpaper from "../../../../assets/projects.jpg";
import { FaGithub } from "react-icons/fa";

const ProjectBanner = () => {
    return (
        <>
            <a href="https://github.com/mmessiasdev/portfolio" target="_blank">
                <Container width="100%" disp="flex" justify="center" margin="50px 0px 0px 0px">
                    <BannerProject>
                        <Container className="sizeBannerProj" width="100%" height="250px" disp="flex" direc="column" overflow="hidden">
                            <Container className="sizeBannerProj" width="100%" disp="flex" aligh="center" justify="center">
                                <img className="gradient" src="https://user-images.githubusercontent.com/78608382/236945432-be133ff9-0008-4b8f-b9c6-b11aa25ef9c1.png" width="100%" />
                            </Container>

                            <Container index="5" pad="20px 20px 100px 20px" posit="absolute" width="350px">
                                <BaseText tag="h1" >Messias</BaseText>
                                <BaseText tag="h4" >No qual eu mostro meus trabalhos e habilidades por meio de um portfólio animado.</BaseText>

                            </Container>
                        </Container>
                    </BannerProject>
                    <Container className="sizeBannerProjGit" width="250px" radius="20px" overflow="hidden" margin="0px 0px 0px 50px" disp="flex" justify="center" aligh="center">
                        <Container className="sizeBannerProjGit" height="250px" width="250px" disp="flex">
                            <Container opacity="40%">
                                <img src={wallpaper} height="250px" />
                            </Container>
                            <Container className="sizeBannerProjGit" height="250px" width="250px" disp="flex" justify="center" aligh="center" posit="absolute">
                                <FaGithub size={90} />
                            </Container>

                        </Container>

                    </Container>

                </Container>

            </a>
        </>
    )
}

export default ProjectBanner;