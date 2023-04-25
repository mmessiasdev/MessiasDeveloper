import styled, { Props } from "styled-components";

export const SecudnaryButton = styled.button<Props>`
    color: ${p => p.theme.colors.text};
    background-color: transparent;
    justify-content: end;
    border: none;
    display: flex;
    align-items: end;
    padding: 0px 30px;
    transition: .5s;
    cursor: pointer;
    &:hover{
        padding: 0px 20px;  
        background-color: transparent;
    }
`