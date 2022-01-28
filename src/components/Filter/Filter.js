import React, { useState } from 'react';

import './Filter.css';

const Filter = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="filter">
      <div className="filter__nav">
        <div className="filter__title">FILTER BLOCK</div>
        <button className="filter__button" onClick={() => setOpen(!open)}>
          <img src={'1.png'} />
        </button>
      </div>

      <div className={`filter__container ${open ? 'show' : ''}`}>
        <div className="filter__wrapper">
          <div className="filter__wrapper_selects">
            <input placeholder="Дата от" />
            <input placeholder="Дата до" />
          </div>

          <div className="filter__wrapper_selects">
            <input placeholder="Дата от" />
            <input placeholder="Дата до" />
          </div>
        </div>

        <div className="filter__wrapper">
          <div className="filter__wrapper_selects">
            <input placeholder="Имя клиента" />
            <input placeholder="Телефон" />
          </div>

          <div className="filter__wrapper_selects">
            <input placeholder="Имя клиента" />
            <input placeholder="Телефон" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
