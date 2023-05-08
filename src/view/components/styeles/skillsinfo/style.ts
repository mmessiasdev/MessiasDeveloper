import styled, { Props } from "styled-components";

export const SkillsInfo = styled.div<Props>`
    background-color: ${p => p.backcolor};
    margin-top: 50px;
    justify-content: center;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0px 30px;
    transition: .5s;
    padding: ${p => p.pad};
    @media (max-width: 600px) {
        flex-direction: column;
        img{
            width: 100%;
        }
    }
`

export const TitleSkills = styled.h1<Props> `
    font-size: 60px;
    color: ${p => p.theme.colors.background};
`