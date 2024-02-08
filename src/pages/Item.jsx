import styled from "styled-components";
import ItemList from "../shared/ItemList";
import Product from "../components/Product";
const Header = styled.div`
  text-align: center;
  border-bottom: 1px solid black;
  padding: 20px;
  margin-bottom: 20px;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: "bold";
`;
const Body = styled.div``;

function Item() {
  return (
    <>
      <Header>
        <Title>상품 페이지</Title>
      </Header>
      <Body>
        {ItemList.map(({ name, price }) => {
          return <Product name={name} price={price} />;
        })}
      </Body>
    </>
  );
}

export default Item;
