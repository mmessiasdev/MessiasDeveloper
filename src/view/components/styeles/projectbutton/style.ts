import styled, { Props } from "styled-components";

export const ProjectButton = styled.button<Props>`
    background-color: ${p => p.theme.colors.secundary};
    color: ${p => p.theme.colors.text};
    border: none;
    margin-top: 0px;
    display: flex;
    overflow: hidden;
    transition: .5s;
    border-radius: 20px 20px 20px 20px;
    width: ${p => p.width};
    cursor: pointer;
    &:hover{
        background-color: ${p => p.theme.colors.text};
        color: ${p => p.theme.colors.background};
        transition: .5s;
    }&:hover .ProjectDesc{
        height: 50px;
        background-color: ${p => p.theme.colors.text};
        color: ${p => p.theme.colors.background};
        transition: .5s;
    }
    &:hover h5{
        color: ${p => p.theme.colors.background};
    }
    &:hover a{
        color: ${p => p.theme.colors.background};

    }
    @media (max-width: 480px) {
        .contentProjects{
            height: 400px;
            width: 100%;
            flex-direction: column;
        }
        .textProjects{
            width: 100%;
        }
        .imageProjects{
            width: 90%;
            height: 500px;
            margin-top: 30px;
            border-radius: 20px;
        }
        .ProjectDesc{
            height: 30px;
            padding-bottom: 10px;
        }
    }


`
export const ProjectDesc = styled.button<Props>`
    background-color: ${p => p.theme.colors.secundary};
    color: ${p => p.theme.colors.text};
    border: none;
    height: 0px;
    overflow: hidden;
    transition: .5s;
    border-radius: 0px 0px 0px 0px;
    margin-top: 20px;
    cursor: pointer;
    &:hover h5{
        color: ${p => p.theme.colors.background};
    }
`

export const ImageContButton = styled.img<Props>`
    background-color: ${p => p.theme.colors.secundary};
    display: flex;
    opacity: 100%;
    background-size: cover;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    transition: .5s;
    height: ${p => p.height};
    cursor: pointer;
    &:hover{
        background-color: ${p => p.theme.colors.text};
        color: ${p => p.theme.colors.background};
    }
`