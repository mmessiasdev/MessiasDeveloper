import styled, { Props } from "styled-components";


export const Wallpaper = styled.img`
    height: 100vh;
    display: flex;  
`

export const WallpaperHover = styled.div<Props>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    transition: 2s;
    justify-content: ${p => p.justify};
    background-color: ${p => p.theme.colors.background};
    display: flex;

`

export const WallpaperImage = styled.img`
    height: 100vh;
    display: flex;
    position: absolute;
    opacity: 20%;
    transition: 2s;
    animation: opacity 20s;
`

export const DivFade = styled.div<Props>`
    width: 100vw;
    height: 100vh;
    z-index: 2;
    opacity: 100%;
    transition: 2s;
    background: ${p => p.theme.colors.background};
    background: linear-gradient(${p => p.deg}, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 20%, ${p => p.theme.colors.background} 40%, ${p => p.theme.colors.background} 100%);
`