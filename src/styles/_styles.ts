import styled, { css } from 'styled-components';

import { Post } from '../pages/index';

interface ContainerProps {
   posts?: Post[];
}
export interface CardProps {
   isPrincipal?: boolean;
}

export const Content = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 30px;
   margin: 0 auto;
   max-width: 800px;
   margin-left: 20px;

   @media (max-width: 800px) {
      margin-right: 2px;
      grid-gap: 20px;
   }
`;
export const Feed = styled.div<ContainerProps>`
   margin-top: 60px;
   display: flex;
   justify-content: space-;

   @media (max-width: 800px) {
      flex-direction: column;
   }
`;
export const Card = styled.div<CardProps>`
   cursor: pointer;
   &:hover {
      transform: translateY(-2%);
   }
   transition: 0.3s;
   div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 370px;
      height: 500px;
      background: #ffff;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

      img {
         max-width: 100%;
         display: block;
      }

      span {
         padding: 4px 0;
         font-size: 12px;
         line-height: 16px;
         text-transform: uppercase;
         color: #c9a96e;
      }

      p {
         padding: 2px 0;
         font-size: 20px;
         line-height: 28px;
         text-align: center;
      }

      ul {
         list-style: none;
         display: flex;
         align-items: center;
         justify-content: center;

         li {
            color: #666666;
            font-size: 12px;
            line-height: 16px;
         }
      }
   }

   ${props =>
      props.isPrincipal &&
      css`
         div {
            display: flex;
            justify-content: left;
            align-items: flex-start;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            width: 770px;
            background: #ffff;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
            img {
               display: block;
               max-width: 100%;
            }

            div {
               background: #ffffff;
               width: 770px;
               height: 212px;
               padding: 25px 0;
               padding-left: 30px;

               span {
                  font-size: 12px;
                  line-height: 16px;
                  text-transform: uppercase;
                  color: #c9a96e;
               }

               strong {
                  font-size: 20px;
                  line-height: 26px;
                  color: #171717;
               }

               ul {
                  list-style: none;
                  display: flex;
                  justify-content: left;
                  padding: 10px 0;
                  li {
                     font-size: 12px;
                     line-height: 16px;

                     & + li {
                        padding-left: 20px;
                     }
                  }
               }
               p {
                  text-align: left;
                  font-size: 14px;
                  line-height: 24px;
                  color: #666666;
                  padding-right: 126px;
               }
            }
         }
      `}

   @media (max-width: 800px) {
      width: 100% !important;
   }
`;

export const SideBar = styled.aside`
   width: 270px;
   height: 2566px;
   display: flex;
   margin-left: 130px;
   margin-right: 375px;

   div {
      margin-top: 30px;

      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
         border: 1px solid #e5e5e5;
         width: 100%;
         height: 50px;
         padding: 15px 75px;
         margin-bottom: 20px;

         h3 {
            font-size: 16px;
            line-height: 21px;
            text-align: center;
            color: #171717;
         }
      }
      .card-content {
         box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
         border-bottom-right-radius: 5px;
         border-bottom-left-radius: 5px;
         height: auto;
         img {
            max-width: 270px;
            display: block;
         }

         strong {
            text-align: center;
            font-weight: bold;
            font-size: 16px;
            line-height: 21px;
            color: #171717;
         }

         span {
            font-style: italic;
            font-size: 14px;
            line-height: 15px;
            color: #b1b1b1;
            text-align: center;
         }

         p {
            padding: 12px 20px;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            color: #666666;
         }

         a {
            border-top: 1px solid #e5e5e5;
            text-decoration: none;
            font-size: 12px;
            line-height: 16px;
            text-transform: uppercase;
            color: #c9a96e;
            padding-bottom: 5px;
         }
      }
   }

   @media (max-width: 800px) {
      display: flex;
      justify-content: left;
      margin-left: 5px;
   }
`;

export const ContentPrincipalPost = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;
