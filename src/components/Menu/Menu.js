import React, { useState } from 'react';

import './Menu.css';

const nav = [
  { circle: '1', name: 'Главная' },
  { circle: '2', name: 'Клиенты' },
  { circle: '3', name: 'Сотрудники' },
  { circle: '4', name: 'Аналитика' },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`menu ${open ? 'show' : ''}`}
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
    >
      <a href="#" className="menu__cell menu__logo">
        <div className="menu__circle">LOGO</div>
        <div className={`menu__name ${open ? 'show' : ''}`}>NAME COMPANY</div>
      </a>

      {nav.map((i) => (
        <ul key={i.name} className="menu__cell ">
          <div className="menu__circle">{i.circle}</div>
          <li>
            <a href="#" className={`menu__name ${open ? 'show' : ''}`}>
              {i.name}
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Menu;
