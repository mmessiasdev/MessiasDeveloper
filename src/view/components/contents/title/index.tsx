import { Container } from "../../styeles/container/style";

interface props {
    title: string;
}

const TitleScreen = ({ title }: props) => {
    return (
        <>
            <Container index="5" aligh="end" disp="flex" justify="center" height="150px" data-aos="fade-down" data-aos-delay="500" width="100%" data-aos-duration='1000' pad="20px">
                <h1>{title}</h1>
            </Container>
        </>
    )
}

export default TitleScreen;