import React from "react";
import { images } from "../../constants";
import { data } from "../../constants";
import "./Menu.css";
import { MenuItem } from "../../components";

const MenuSection = ({ title, items }) => (
  <div className="menu__section">
    <h2 className="menu__title">{title}</h2>
    <div className="menu__items">
      {items.map((item, index) => (
        <div className="menu__item justify-content-center" key={index}>
          <MenuItem title={item.title} price={item.price} tags={item.tags} />
        </div>
      ))}
    </div>
  </div>
);

const Menu = () => {
  return (
    <div className="menu bg-black">
      <MenuSection title="White Wines" items={data.whiteWines} />
      <MenuSection title="Pasta" items={data.pasta} />
      <MenuSection title="Red Wines" items={data.redWines} />
      <MenuSection title="Cocktails" items={data.cocktails} />
      <MenuSection title="Drinks" items={data.drinks} />
      <MenuSection title="Pasta" items={data.pasta} />
      <MenuSection title="Starters" items={data.starters} />
      <MenuSection title="Fish" items={data.fish} />
      <MenuSection title="Meat" items={data.meat} />
      <MenuSection title="Pizza" items={data.pizza} />
      <MenuSection title="Side Dishes" items={data.sideDishes} />
      <MenuSection title="Desserts" items={data.desserts} />
    </div>
  );
};

export default Menu;
