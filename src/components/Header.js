import React from 'react';

import facebook from '../assets/facebook.png';
import avatar from '../assets/avatar.png';

function Header() {
  return (
    <nav>
      <img src={facebook} alt='Facebook' />

      <div id="account">
        <p>Meu perfil</p>
        <img src={avatar} alt='Profile' />
      </div>
    </nav>
  );
}

export default Header;
