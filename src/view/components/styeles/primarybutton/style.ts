import styled from "styled-components";

interface Props {
    justify: string,
    top: string,
    radius: string,
    index: string,
}

export const InitialButtons = styled.button<Props>`
    height: 100vh;
    border: none;
    min-width: 300px;
    background-color: ${p => p.theme.colors.primary};
    border-radius: ${p => p.radius};
    position: relative;
    top: ${p => p.top}; 
    margin-left: 25px;
    z-index: ${p => p.index};
    transition: .4s;
    cursor: pointer;
    @media (max-width: 1060px) {
        min-width: 250px;
    }
    @media (max-width: 750px) {
        height: 200px;
    }
    @media (max-width: 600px) {
        top: 0px;
        height: 90px;
        width: 320px;
        border-radius: 25px;
        margin-top: 20px;
        margin-left: 0px;
    }
    @media (max-width: 380px) {
        top: 0px;
        height: 90px;
        width: 230px;
        border-radius: 25px;
        margin-top: 20px;
        margin-left: 0px;
    }



`