import { RiFlutterFill, RiNpmjsLine, RiQrCodeFill } from "react-icons/ri";
import { SiChatbot, SiDialogflow, SiGooglecloud, SiStrapi } from "react-icons/si";
import { FaAndroid, FaCss3, FaDatabase, FaFigma, FaHtml5, FaPaypal, FaPython, FaReact, FaSearch } from "react-icons/fa";
import Tilt from "../../styeles/animatedcard";
import ContentProjects from "../projects";
import { Container } from "../../styeles/container/style";


const ProjectsList = () => {

    const options = {
        scale: 1.2,
        speed: 1500,
        max: 30,
        perspective: 1000,
    };


    return (
        <>
            <Container data-aos="fade-up" data-aos-delay="500" data-aos-duration='1500' pad="100px 40px 100px 40px" justify="center" disp="flex" aligh="center" direc="column" overflow="hidden" width="100%">
                <Container pad="100px 0px 0px 0px">
                    <Tilt options={options}>
                        <ContentProjects title={"Freedom"} desc={"Uma rede social para presernvação e comunicação sobre preservações de assédios e abusos."} icon1={<RiFlutterFill />} icon2={<SiStrapi />} icon3={<FaDatabase />} icon4={<RiNpmjsLine />} href={"https://github.com/mmessiasdev/Freedom"} wall={"https://user-images.githubusercontent.com/78608382/233136272-f3b0f067-8b2a-4a41-ae24-4c1fe558b5f5.png"} />
                    </Tilt>
                </Container>
                <Container pad="100px 0px 0px 0px">
                    <Tilt options={options}>
                        <ContentProjects title={"Storyes"} desc={"Uma loja virtual cross platform com vendas e produtos voltado ao público gamer."} icon1={<FaReact />} icon2={<RiFlutterFill />} icon3={<FaPaypal />} icon4={<FaDatabase />} href={"https://github.com/mmessiasdev/Storyes"} wall={"https://user-images.githubusercontent.com/78608382/233129604-dbc45a84-d77d-41f2-846f-5684c1c9541e.png"} />
                    </Tilt>
                </Container>

                <Container pad="100px 0px 0px 0px">
                    <Tilt options={options}>
                        <ContentProjects title={"Movietips"} desc={"Um app que facilita a procura e filtro de filmes que o usuário realmente gosta."} icon1={<RiFlutterFill />} icon2={<SiGooglecloud />} icon3={<FaAndroid />} icon4={<FaSearch />} href={"https://github.com/mmessiasdev/Movietips"} wall={"https://user-images.githubusercontent.com/78608382/233128304-2fd054a6-42d8-4cc9-9ab8-c173fa156aac.png"} />
                    </Tilt>
                </Container>

                <Container pad="100px 0px 0px 0px">
                    <Tilt options={options}>
                        <ContentProjects title={"Fabiano Seixas"} desc={"Uma aplicação que visa o engajamento e a taxa de contato do cliente com a empresa de adivocacía."} icon1={<FaHtml5 />} icon2={<FaPython />} icon3={<SiDialogflow />} icon4={<SiChatbot />} href={"https://github.com/mmessiasdev/FabianoSeixas"} wall={"https://user-images.githubusercontent.com/78608382/233129576-81dc0e8b-3ef8-4a7b-bcb3-4cb228a7069b.png"} />
                    </Tilt>
                </Container>

                <Container pad="100px 0px 0px 0px">
                    <Tilt options={options}>
                        <ContentProjects title={"Job Constuções"} desc={"Um sistema de apresentação com UI/UX adapatada para a melhor visualização e engajamento da empresa."} icon1={<FaReact />} icon2={<FaFigma />} icon3={<RiQrCodeFill />} icon4={<FaCss3 />} href={"https://github.com/mmessiasdev/Job"} wall={"https://user-images.githubusercontent.com/78608382/233129618-ceba5598-6674-4c64-989d-ebb4879483a9.png"} />
                    </Tilt>
                </Container>


            </Container>
        </>
    )
}

export default ProjectsList;