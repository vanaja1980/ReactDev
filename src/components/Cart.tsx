interface Props {
  CartItems: string[];
}

function Cart({ CartItems }: Props) {
  return (
    <>
      <ul>
        {CartItems.map((item) => (
          <li id={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Cart;
