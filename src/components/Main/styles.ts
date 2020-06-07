import styled from 'styled-components';

export const Container = styled.main`
   width: 100%;
   height: 100%;
   position: relative;
   background: #ffff;
`;

export const Banner = styled.div`
   position: relative;

   img {
      max-width: 100%;
      display: block;
   }

   div {
      top: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
         180deg,
         rgba(0, 0, 0, 6.5e-5) 0%,
         rgba(0, 0, 0, 0.65) 100%
      );
      opacity: 0.9;
   }
`;

export const Content = styled.div`
   position: absolute;

   left: 19.53%;
   right: 50%;
   bottom: 50px;
   display: flex;
   flex-direction: column;
   color: #ffff;

   span {
      font-size: 14px;
      line-height: 18px;
      text-transform: uppercase;
      color: #fff;
   }
   strong {
      font-weight: bold;
      font-size: 40px;
      line-height: 50px;
      color: #ffff;
   }
   ul {
      display: flex;

      li {
         list-style: none;
         & + li {
            padding-left: 15px;
         }
         font-size: 14px;
         line-height: 19px;
         color: #ffff;
      }
   }
`;
