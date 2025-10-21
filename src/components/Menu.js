// Menu.js
import React from 'react';

function Menu({ items }) {
  return (
    <div className="menu-container">
      {items.map((item) => {
        const { id, title, category, price, img } = item;
        const dataTestId = `menu-item-${category.toLowerCase()}`;

        return (
          <article key={id} className="menu-item" data-test-id={dataTestId}>
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">Delicious {category.toLowerCase()} option.</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
