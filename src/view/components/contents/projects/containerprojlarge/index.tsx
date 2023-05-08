import { Container } from "../../../styeles/container/style";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { RoundedContainer } from "../../../styeles/roundedcontainer/style";
import { SecudnaryButton } from "../../../styeles/secundarybutton/style";
import { FaGithub } from "react-icons/fa";

interface props {
    title?: string;
    desc?: string;
    href?: string;
    wall?: string;
    icon1?: any;
    icon2?: any;
    icon3?: any;
    icon4?: any;
}

const ContainerProjectLarge = ({ icon1, icon2, icon3, icon4, title, desc, href, wall }: props) => {
    return (
        <>
            <Container width="100%" disp="flex" pad="50px" color="#ff6d9b">
                <Container disp="flex" direc="column" width="65%" justify="space-between" pad="0px 50px 0px 0px">
                    <Container>
                        <h3>{title}</h3>
                        <Container disp="flex" pad="10px 0px">
                            <Container disp="flex" pad="0px 5px 0px 0px">
                                {icon1}

                            </Container>
                            <Container disp="flex" pad="0px 5px">
                                {icon2}

                            </Container>
                            <Container disp="flex" pad="0px 5px">
                                {icon3}

                            </Container>
                            <Container disp="flex" pad="0px 5px">
                                {icon4}

                            </Container>
                        </Container>
                        <Container pad="30px 0px" height="200px" overflow="hidden">
                            <h4>{desc}</h4>
                        </Container>
                    </Container>
                    <Container>
                        <a href={href} target="_blank" >
                            <RoundedContainer width="200px" aligh="center" radius="10px" disp="flex" justify="center">
                                <FaGithub color="#ffffff62" size={50} />
                                <SecudnaryButton><h3>GitHub</h3></SecudnaryButton>
                            </RoundedContainer>
                        </a>
                    </Container>
                </Container>
                <Container disp="flex" width="35%" justify="end" radius="35px" overflow="hidden">
                    <img width="100%" src={wall} />
                </Container>
            </Container>
        </>
    )
}

export default ContainerProjectLarge;