import { Container, ContainerBackTheme } from "../../styeles/container/style";
import { RoundedContainer } from "../../styeles/roundedcontainer/style";
import { SecudnaryButton } from "../../styeles/secundarybutton/style";
import { useState, useEffect } from "react";

interface props{
    gif: string;
    className: string;
}

const MobilePopup = ({gif}: props) => {
    const [initPage, setInitPage] = useState(false);

    const [counter, setCounter] = useState(1);

    const removeNode = (idx: any) => document.getElementById(`id-${idx}`)!.remove() as HTMLElement | undefined;

    useEffect(() => {
        setInitPage(true);
        setTimeout(() => {
            setInitPage(false)
        }, 2200)
    }, [])


    return (
        <>
            {Array.from(Array(counter)).map((item, idx) => (
                <Container disp="flex" posit="absolute" height="100vh" width="100%" key={idx} id={`id-${idx}`}>
                    {
                        initPage ? <div>
                        </div> :
                            <Container>
                                {
                                    Array.from(Array(counter)).map((item, idx) => (

                                        <ContainerBackTheme index="10" height="100vh" width="100%" posit="fixed" disp="flex" justify="center" aligh="end" color="rgba(185, 234, 245, 0.8)" data-aos="fade-up" data-aos-duration='500' blur="3px">
                                            <ContainerBackTheme height="80%" width="80%" posit="fixed" radius="40px 40px 0px 0px" justify="space-between" disp="flex" direc="column" aligh="center" pad="35px" data-aos="fade-up" data-aos-duration='1000' data-aos-delay="250">
                                                <Container disp="flex" direc="column" justify="center" aligh="center">
                                                    <Container radius="20px" width="230px" height="130px" overflow="hidden" margin="0px 0px 30px 0px" disp="flex" justify="center"><img height={130} src={gif} /></Container>
                                                    <h5>Clique em Ok. Mas para melhor visualização de habilidades e técnicas, entre pelo computador no site.</h5>
                                                </Container>
                                                <Container margin="30px 0px">
                                                    <RoundedContainer pad="20px 50px" radius="10px">
                                                        <SecudnaryButton onClick={() => removeNode(idx)}><h5>Ok</h5></SecudnaryButton>
                                                    </RoundedContainer>
                                                </Container>

                                            </ContainerBackTheme>
                                        </ContainerBackTheme>

                                    ))

                                }
                            </Container>
                    }
                </Container>

            ))}
        </>
    )
}

export default MobilePopup;