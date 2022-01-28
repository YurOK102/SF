import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__input">
        <input type="text" id="mySearch" placeholder="Поиск..." />
      </div>

      <div className="header__user">
        <div className="header__user_name">Петров В.А.</div>
        <div className="header__user_img">
          <div>В.А.</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
