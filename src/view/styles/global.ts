import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    *::-webkit-scrollbar {
    /* height: 1px; */
    width: 5px;
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secundary};
        border-radius: 0px;
    }
    *::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.background};
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat';

    }
    body{
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font-family: 'Montserrat';
        transition: .5s;
        overflow-x: hidden;
    }
    h1{
        font-size: 60px;
        color: ${props => props.theme.colors.text};
        text-align: center;
    }
    .initialInfo {
        text-align: start;
    }
    h2{
        font-size: 40px;
        font-weight: 300;
        color: ${props => props.theme.colors.text};
    }
    h3{
        font-size: 45px;
        font-weight: bold;
        color: ${props => props.theme.colors.text};
    }
    h4{
        font-size: 32px;
        font-weight: normal;
        color: ${props => props.theme.colors.text};
    }
    h5{
        font-size: 15px;
        font-weight: bold;
        color: ${props => props.theme.colors.text};
    }
    h6{
        font-size: 100px;
        position: absolute;
        font-weight: lighter;
        opacity: 10%;
        width: 400px;
        text-align: start;
        overflow: hidden;
        color: ${props => props.theme.colors.text};
    }
    .desc{
        text-align: end;    
    }
    p{
        margin-top: 10px;
        text-align: start;
    }
    a{
        text-decoration: none;
        color: ${props => props.theme.colors.text};
    }
    .initialInfo{
        animation: initialInfo 6s;
        opacity: 0%;
    }
    .initialInfo img{
        opacity: 0%;
    }
    .blurbuttomcont{
        display: none;
    }

    .mobileHome{
        display: none;
    }
    .mobileProject{
        display: none;
    }
    .contentProjects{
        width: 400px;
    }
    .skillsListMobile{
        display: none;
    }
    
    
    @media (max-width: 960px) {
        .curriculum{
            display: none;
        }
        .initialbuttons{    
            width: 100%;
        }
        .homewallpaper{
            width: 100%;
            position: absolute;
        }
        .homewallpaperImg{
            opacity: 50%;
        }
    }
    @media (max-width: 750px) {
        .initialbuttons{    
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .aboutContent{
            display: inline;
        }
        .aboutName{
            display: flex;
            flex-direction: column;
            padding: 0px;
            width: 100%;
            margin-top: 100px;
        }
        .aboutDesc{
            padding: 0px;
            width: 100%;
        }
        .linkContent{
            flex-direction: column;
            justify-content: center;
        }
        .linkPadding{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px 25px;
        }
    }
    @media (max-width: 600px) {
        .initialbuttons{
            display: none;
        }
        .blurbuttomcont{
            display: flex;
        }
        .desktopHome{
            display: none;
        }
        .mobileHome{
            display: flex;
        }
        .desktopProject{
            display: none;
        }
        .mobileProject{
            display: flex;
        }
        .skillsListDesktop{
            display: none;
        }
        .skillsListMobile{
            display: inline;
        }

    }
    @media (max-width: 350px) {
        h1{
            font-size: 40px;
            color: ${props => props.theme.colors.text};
            text-align: center;
        }
    }












    
    @keyframes initialInfo {
        0%{
            opacity: 100%;
        }
        80%{
            opacity: 100%;
        }
        95%{
            opacity: 0%;
        }
        
    }
    @keyframes opacity {
        0%{
            opacity: 0%;
            transform: scale(1);
        }
        3%{
            opacity: 20%;
        }
        80%{
            opacity: 20%;   
        }
        95%{
            opacity: 0%;
            transform: scale(1.5);

        }
        
    }
`