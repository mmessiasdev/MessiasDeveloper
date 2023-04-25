import { Container } from '../../../components/styeles/container/style';
import pdf from '../../../assets/curriculum/CurriculoReact.pdf';
import TitleScreen from '../../../components/contents/title';
import RenderCurriculum from '../../../components/contents/rendercurriculum';

const ReactPortuguese = () => {
    return (
        <>
            <Container disp='flex' justify='center' aligh='center' direc='column' overflow='hidden'>
                <TitleScreen title={"Currículo React"}></TitleScreen>
                <RenderCurriculum pdf={pdf} titleFile={"M. Messias - Currículo React"}/>
            </Container>
        </>
    );
}

export default ReactPortuguese;