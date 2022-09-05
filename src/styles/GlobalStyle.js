import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

        :root{

            /* Fonts size */
            --fz-xxs: 12px;
            --fz-xs: 13px;
            --fz-sm: 14px;
            --fz-md: 16px;
            --fz-lg: 18px;
            --fz-lgg: 19px;
            --fz-lgg-tab: 22px;
            --fz-xl: 24px;
            --fz-xll: 28px;
            --fz-xllll: 30px;
            --fz-xlll: 47px;
            --fz-x-tab2: 55px;
            --fz-xxl: 64px;
            --fz-xx-tab: 70px;
            --fz-xxll: 80px;
            --fz-heading: 90px;

            /* Border radius */
            --radius1: 50%;
            --radius: 50px;
            --radius3: 30px;

            /* Themes */
            --primary: #ad4f97;
            --white: #fff;
            --black: #000;
            --navy: #64646C;
            --border: #eaeaed;
            --navyTwo: #777E91;

            --border-size: 1px solid;


            /* Family */

            --family: 'Calibre';

            /* Animation */
            --transition: all 0.4s ease-in-out;
            --transition2: all 0.7s ease-in-out;
            --transition3: all 0.9s ease-in-out;

            /* Mobile transition */
            --transition-menu-bg: all 0.2s ease-in-out;

            --side-shadow: rgba(2, 70, 145, 0.33) 0px 4px 24px -10px;

            --rgba-hero: rgba(0,0,0,0.9);
            --rgba-btn-hero: rgba(0,0,0,0.1);


            /* Breakpoint */
            --xs: 480px;
            --md: 800px;
            --lg: 1024;

    }


    html {
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
        font-family: var(--family);
        margin: 0;
        padding: 0;
    }
    
    *,
    *:before,
    *:after {
        box-sizing: inherit;
        font-family: 'Calibre';
        margin: 0;
        padding: 0;
    }
    



`


export default GlobalStyle