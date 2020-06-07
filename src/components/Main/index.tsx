/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import bannerImg from '../../assets/banner.png';
import { Container, Content, Banner } from './styles';

const Main: React.FC = () => {
   return (
      <Container>
         <Banner>
            <img src={bannerImg} alt="banner" />
            <div />
         </Banner>

         <Content>
            <span>Vehicle</span>
            <strong>
               One of Saturn's largest rings may be newer than anymore
            </strong>
            <ul>
               <li>june, 2019</li>
               <li>By Rickie braoch </li>
               <li>4 comments</li>
            </ul>
         </Content>
      </Container>
   );
};

export default Main;
