import styled, { Props } from "styled-components";



export const RoundedContainer = styled.div<Props>`
    background-color: ${p => p.theme.colors.secundary};
    width: ${p => p.width};
    height: ${p => p.height};
    padding: ${p => p.pad};
    display: ${p => p.disp};
    justify-content:  ${p => p.justify};
    align-items: ${p => p.aligh};
    border-radius: ${p => p.radius};
    margin: ${p => p.margin};
    position: ${p => p.posit};
    margin: ${p => p.margin};
    z-index: 20;
        @media (max-width: 380px) {
        top: 0px;
        height: 90px;
        width: 230px;
        display: flex;
        border-radius: 25px;
        margin: 10px 0px;
        margin-left: 0px;
        justify-content: center;
        align-items: center;
    }
`