import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
   return (
      <Container>
         <h2>FASHION</h2>
         <ul>
            <li>Home</li>
            <li>Recipes</li>
            <li>Article</li>
            <li>Contact</li>
            <li>Pruchase</li>
         </ul>
      </Container>
   );
};

export default Header;
