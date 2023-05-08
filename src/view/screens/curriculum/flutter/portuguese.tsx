import { Container } from '../../../components/styeles/container/style';
import pdf from '../../../assets/curriculum/CurriculoFlutter.pdf';
import TitleScreen from '../../../components/contents/title';
import RenderCurriculum from '../../../components/contents/rendercurriculum';

const FlutterPortuguese = () => {

    return (
        <>
            <Container disp='flex' justify='center' aligh='center' direc='column' overflow='hidden'>
                <TitleScreen title={"Currículo Flutter"}></TitleScreen>
                <RenderCurriculum pdf={pdf} titleFile={"M Messias - Currículo Flutter.pdf"}/>
            </Container>    
        </>
    );
}

export default FlutterPortuguese;