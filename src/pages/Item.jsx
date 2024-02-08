import { useState } from "react";
import styled from "styled-components";
import ItemList from "../shared/ItemList";
import { Link } from "react-router-dom";
function Item({ setCart }) {
  const [itemList, setItemList] = useState(
    ItemList.map((item) => ({ ...item, id: crypto.randomUUID(), count: 0 }))
  );

  const plus = (id) => {
    setItemList(
      itemList.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const minus = () => {
    setItemList(
      itemList.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  const handleCartClick = (id) => {
    const item = itemList.find((item) => item.id === id);
    setCart((prev) => [...prev, item]);
  };

  return (
    <>
      <h1>상품 페이지</h1>
      <hr />
      <div id="items">
        {itemList.map((item) => (
          <div className="item">
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.count}</p>
            <button onClick={() => plus(item.id)}>+</button>
            <button onClick={() => minus(item.id)}>-</button>
            <button onClick={() => handleCartClick(item.id)}>
              장바구니 추가
            </button>
          </div>
        ))}
      </div>
      <Link to="/cart">장바구니</Link>
    </>
  );
}

export default Item;
