import { Link } from "react-router-dom";

function Cart({ cart: itemList }) {
  const totalPrice = itemList.reduce(
    (acc, cur) => acc + cur.price * cur.count,
    0
  );
  return (
    <>
      <h1>내 장바구니</h1>
      <p>{totalPrice}</p>
      <hr />
      <h3>내가 담은 상품</h3>
      <div id="items">
        {itemList.map((item) => (
          <div className="item">
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.count}</p>
          </div>
        ))}
      </div>
      <Link to="/">돌아가기</Link>
    </>
  );
}
export default Cart;
