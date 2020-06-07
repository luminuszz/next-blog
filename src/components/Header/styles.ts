import styled from 'styled-components';

export const Container = styled.header`
   background: #f2f2f2;

   height: 80px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 36px 0;
   padding-right: 67px;

   h2 {
      font-size: 25px;
      font-weight: bold;
      line-height: 33px;
      letter-spacing: 2.5px;
      color: #171717;
      margin: 0 80px;
   }

   ul {
      display: flex;
      align-items: center;
      list-style: none;
      cursor: pointer;
      li:first-child {
         color: #c9a96e;
      }

      li {
         & + li {
            margin-left: 20px;
         }
         color: #171717;
         font-size: 14px;
         line-height: 19px;
      }
   }
`;
