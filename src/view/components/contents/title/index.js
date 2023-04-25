import { Container } from "../../styeles/container/style";

const TitleScreen = ({ title }) => {
    return (
        <>
            <Container aligh="end" disp="flex" justify="center" height="200px" data-aos="fade-down" data-aos-delay="500" data-aos-duration='1000' pad="20px">
                <h1>{title}</h1>
            </Container>
        </>
    )
}

export default TitleScreen;