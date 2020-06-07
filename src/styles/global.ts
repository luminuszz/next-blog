import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@font-face {
   font-family: 'PT Serif', serif ;
   src: url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
}

*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;

}

body {
   background: #F2F2F2;
   font-family: 'PT Serif', serif ;


      button{
         cursor:pointer;
      }
}


`;
