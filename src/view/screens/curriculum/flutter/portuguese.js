import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { Container } from '../../../components/styeles/container/style';
import pdf from '../../../assets/curriculum/CurriculoFlutter.pdf';
import TitleScreen from '../../../components/contents/title';
import styled from 'styled-components';
import { RoundedContainer } from '../../../components/styeles/roundedcontainer/style';
import { SecudnaryButton } from '../../../components/styeles/secundarybutton/style';
import RenderCurriculum from '../../../components/contents/rendercurriculum';

const FlutterPortuguese = () => {
    const PDFDocumentWrapper = styled.div`
        canvas {
            width: 100% !important;
            height: auto !important;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 25px;
        }
    `;

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(pdf).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'M. Messias - CurriculumFlutter.pdf';
                alink.click();
            })
        })
    }

    return (
        <>
            <Container disp='flex' justify='center' aligh='center' direc='column' overflow='hidden'>
                <TitleScreen title={"Currículo Flutter"}></TitleScreen>
                <RenderCurriculum pdf={pdf} titleFile={"M. Messias - Currículo Flutter"}/>
            </Container>    
        </>
    );
}

export default FlutterPortuguese;