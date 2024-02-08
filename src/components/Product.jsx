import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 5px;
`;
const Name = styled.p`
  font-size: 20px;
  margin-bottom: 5px;
`;
const Price = styled.p`
  font-size: 12px;
`;
const Count = styled.input`
  font-size: 16px;
  display: inline-block;
  text-align: center;
  width: 50px;
  margin: 0px 10px;
`;
const ItemNumberContainer = styled.div`
  margin-top: 5px;
`;

const AddCart = styled.button`
  margin: 10px 0px;
`;

function Product({ name, price }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prev) => prev + 1);
  };
  const countDown = () => {
    if (count <= 0) setCount(0);
    else setCount((prev) => prev - 1);
  };

  const sendData = () => {};
  return (
    <ProductContainer>
      <Name>{name}</Name>
      <Price>{price}</Price>
      <ItemNumberContainer>
        <button onClick={countDown}>-</button>
        <Count
          value={count}
          onChange={(event) =>
            setCount(+event.target.value >= 0 ? +event.target.value : 0)
          }
          type="number"
        ></Count>
        <button onClick={countUp}>+</button>
      </ItemNumberContainer>
      <AddCart onClick={sendData}>장바구니에 담기</AddCart>
    </ProductContainer>
  );
}

export default Product;
