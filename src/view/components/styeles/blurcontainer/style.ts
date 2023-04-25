import styled, { Props } from "styled-components";

export const Blur = styled.div<Props>`
    width: ${p => p.width};
    height: ${p => p.height};
    border-radius: ${p => p.radius};
    background-color: rgba(255, 255, 255, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px 20px;
    backdrop-filter: blur(10px);
    
`