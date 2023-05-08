import { Container } from "../../styeles/container/style";
import { SkillsInfo, TitleSkills } from "../../styeles/skillsinfo/style";

interface props {
    back: string;
    techtitle: string;
    nameimg: string;
}

const ContentSkills = ({ back, techtitle, nameimg }: props) => {
    return (
        <>
            <Container margin="200px 0px 300px 0px" data-aos="fade-up" data-aos-delay="0" data-aos-duration='1000'>
                <SkillsInfo backcolor={back} pad="100px 0px 100px 0px">
                    <Container className="skillsContents" width="50%" justify="center" disp="flex" pad="0px 50px" aligh="center">
                        <TitleSkills>{techtitle}</TitleSkills>
                    </Container>
                    <Container disp="flex" aligh="center" justify="center" pad="50px 100px">
                        <img width="50%" src={nameimg} />
                    </Container>
                </SkillsInfo>

            </Container>
        </>


    )
}

export default ContentSkills;