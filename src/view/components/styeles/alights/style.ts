import styled, { Props } from "styled-components";


export const OverItens = styled.div<Props>`
    display: flex;
    justify-content: ${p => p.justify};
    width: 100vw;
    z-index: 3;
    overflow: hidden;
    @media (max-width: 960px) {
          width: 100vw;
    }
`

export const AlightItens = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: ${p => p.justify};
    padding: 50px;
    height: 100vh;
    z-index: 1;
    width: 100%;
    position: absolute;
`

export const AlightTitle = styled.div`
    display: inline;
    padding-left: 30px;
`

export const Center = styled.div`
    justify-content: center;
    align-items: center;
`