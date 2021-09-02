import { createGlobalStyle } from "styled-components";
import FuturaLight from './assets/FuturaLight.ttf'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Futura Light';
        src: local('Futura Light'), local('FuturaLight') url(${FuturaLight}) format('truetype');
    }
`;