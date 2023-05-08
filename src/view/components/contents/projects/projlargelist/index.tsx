import { Container } from "../../../styeles/container/style"
import BaseText from "../../typography"
import ContainerProjectLarge from "../containerprojlarge";

import { RiFlutterFill, RiNpmjsLine, RiQrCodeFill } from "react-icons/ri";
import { SiChatbot, SiDialogflow, SiGooglecloud, SiStrapi } from "react-icons/si";
import { FaAndroid, FaCss3, FaDatabase, FaFigma, FaHtml5, FaPaypal, FaPython, FaReact, FaSearch } from "react-icons/fa";

const ProjLargeList = () => {
    return (
        <>
            <Container>
                <Container pad="100px 0px 50px 0px">
                    <BaseText tag="h4">Emphasis</BaseText>


                </Container>
                <ContainerProjectLarge title="Freedom" desc="Uma rede social para presernvação e comunicação sobre preservações de assédios e abusos." icon1={<RiFlutterFill />} icon2={<SiStrapi />} icon3={<FaDatabase />} icon4={<RiNpmjsLine />} href={"https://github.com/mmessiasdev/Freedom"} wall={"https://user-images.githubusercontent.com/78608382/233136272-f3b0f067-8b2a-4a41-ae24-4c1fe558b5f5.png"} />

            </Container>
        </>
    )
}

export default ProjLargeList;