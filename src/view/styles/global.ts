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
    p{
        margin-top: 10px;
        text-align: start;
    }
    a{
        text-decoration: none;
        color: ${props => props.theme.colors.text};
    }
    
    @media (max-width: 350px) {
        h1{
            font-size: 40px;
            color: ${props => props.theme.colors.text};
            text-align: center;
        }
    }

`