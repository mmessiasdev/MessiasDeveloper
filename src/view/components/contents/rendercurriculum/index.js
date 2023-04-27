import styled from "styled-components";
import { Container } from "../../styeles/container/style";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { RoundedContainer } from "../../styeles/roundedcontainer/style";
import { SecudnaryButton } from "../../styeles/secundarybutton/style";



const RenderCurriculum = ({pdf, titleFile}) => {

    const PDFDocumentWrapper = styled.div`
    canvas {
        width: 100% !important;
        height: 100% !important;
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
                alink.download = titleFile;
                alink.click();
            })
        })
    }

    return (
        <>
            <Container pad="100px 0px 0px 0px" data-aos="fade-up" data-aos-delay="2000" data-aos-duration='1500'>
                <PDFDocumentWrapper>
                    <Document file={pdf}>
                        <Page pageNumber={1} />
                    </Document>
                </PDFDocumentWrapper>
            </Container>

            <Container margin='0px 0px 100px 0px' data-aos="fade-up" data-aos-delay="2000" data-aos-duration='1500'>
                <RoundedContainer disp='flex' justify='center' aligh='center' radius='20px' pad='20px'>
                    <SecudnaryButton onClick={onButtonClick}><h5>Download</h5></SecudnaryButton>
                </RoundedContainer>
            </Container>
        </>
    )
}

export default RenderCurriculum;