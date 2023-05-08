import { Container } from "../../components/styeles/container/style"
import { RoundedContainer } from "../../components/styeles/roundedcontainer/style"
import TitleScreen from "../../components/contents/title";
import CurriculumButtom from "../../components/contents/currriculumbuttom";
import { RiFlutterFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

const SelectCurriculumEnglish = () => {


    return (
        <>
            <TitleScreen title={"Resumes"} />

            <Container height="100%" width="100%" pad="100px 30px" disp="flex" justify="center" aligh="center" direc="column">
                <RoundedContainer radius="10px" margin="20px 0px" pad="20px" data-aos="fade-up" data-aos-delay="100" data-aos-duration='1000'>
                    <CurriculumButtom route={"/portfolio/englishflutter"} title={<h5>Flutter</h5>} icon={<RiFlutterFill size={20} />} />
                </RoundedContainer>
                <RoundedContainer radius="10px" margin="20px 0px" pad="20px" data-aos="fade-up" data-aos-delay="200" data-aos-duration='1500'>
                    <CurriculumButtom route={"/portfolio/englishreact"} title={<h5>React</h5>} icon={<FaReact size={20} />} />
                </RoundedContainer>
            </Container>
        </>
    )
}

export default SelectCurriculumEnglish;