import { Container } from '../../../components/styeles/container/style';
import pdf from '../../../assets/curriculum/ReactCurriculum.pdf';
import TitleScreen from '../../../components/contents/title';
import RenderCurriculum from '../../../components/contents/rendercurriculum';

const ReactEnglish = () => {

    return (
        <>
            <Container disp='flex' justify='center' aligh='center' direc='column' overflow='hidden'>
                <TitleScreen title={"React Curriculum"}></TitleScreen>
                <RenderCurriculum pdf={pdf} titleFile={"M. Messias - React Curriculum"}/>
            </Container>
        </>
    );
}

export default ReactEnglish;