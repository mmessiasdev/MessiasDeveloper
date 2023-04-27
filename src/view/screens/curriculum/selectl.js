import { Container } from "../../components/styeles/container/style"
import { RoundedContainer } from "../../components/styeles/roundedcontainer/style"
import TitleScreen from "../../components/contents/title";
import CurriculumButtom from "../../components/contents/currriculumbuttom";

const SelectLanguageCurriculum = () => {


    return (
        <>
            <TitleScreen title={"Language"} />

            <Container height="100%" width="100%" pad="100px 30px" disp="flex" justify="center" aligh="center" direc="column">
                <RoundedContainer data-aos="fade-up" data-aos-delay="100" data-aos-duration='1000' radius="10px" margin="20px 0px" pad="20px">
                    <CurriculumButtom route={"/portfolio/selectcurriculumportuguese"} title={<h5>Português</h5>} />
                </RoundedContainer> 
                <RoundedContainer radius="10px" margin="20px 0px" pad="20px" data-aos="fade-up" data-aos-delay="200" data-aos-duration='1500'>
                    <CurriculumButtom route={"/portfolio/selectcurriculumenglish"} title={<h5>English</h5>}/>
                </RoundedContainer>
            </Container>
        </>
    )
}

export default SelectLanguageCurriculum;