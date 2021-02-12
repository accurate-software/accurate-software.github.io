import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: "San Francisco";
        font-weight: 400;
        src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
    }
    
    html,body,#root {
        background-color: #f1f2f5;
        color: #1F1F1F;
        font-family: 'San Francisco';
        /* width: 80%; */
    }
`;
