import { Container } from "../../../styeles/container/style"
import ProjectsList from "../projectslist"

const PinnedProj = () => {
    return (
        <>
            <Container width="100%" pad="75px 0px 0px 0px ">
                <Container width="100%" disp="flex" justify="start" data-aos="fade" data-aos-delay="2000" data-aos-duration='2000'>
                    <h4>Pinned</h4>
                </Container>
                <Container pad="50px 0px 100px 0px " width="100%" disp="flex" direc="column" justify="center">
                    <ProjectsList scale="1" max={"0"} />
                </Container>
            </Container>
        </>
    )
}

export default PinnedProj