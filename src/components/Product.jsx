import styled from "styled-components";
import { useState } from "react";
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
const Count = styled.p`
  font-size: 16px;
  display: inline-block;
`;
const ItemNumberContainer = styled.div`
  margin-top: 5px;
`;

function Product({ name, price }) {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prev) => prev + 1);
    console.log(count);
  };
  const countDown = () => {
    setCount((prev) => {
      prev > 0 ? prev - 1 : 0;
    });
  };
  return (
    <ProductContainer>
      <Name>{name}</Name>
      <Price>{price}</Price>
      <ItemNumberContainer>
        <button onClick={countUp}>-</button>
        <Count>{count}</Count>
        <button onClick={countDown}>+</button>
      </ItemNumberContainer>
    </ProductContainer>
  );
}

export default Product;
