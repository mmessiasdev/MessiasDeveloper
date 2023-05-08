import { Container } from '../../../components/styeles/container/style';
import pdf from '../../../assets/curriculum/FlutterCurriculum.pdf';
import TitleScreen from '../../../components/contents/title';
import RenderCurriculum from '../../../components/contents/rendercurriculum';

const FlutterEnglish = () => {
    return (
        <>
            <Container disp='flex' justify='center' aligh='center' direc='column' overflow='hidden'>
                <TitleScreen title={"Flutter Currículum"}></TitleScreen>
                <RenderCurriculum pdf={pdf} titleFile={"M Messias - Flutter Curriculum.pdf"}/>
            </Container>
        </>
    );
}

export default FlutterEnglish;