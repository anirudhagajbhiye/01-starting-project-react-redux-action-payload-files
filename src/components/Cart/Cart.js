import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { fetchCartData } from "../store/cart-actions";

const Cart = (props) => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    dispatch(fetchCartData());
  };

  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => {
          return (
            <CartItem
              item={{
                id: item.id,
                title: item.product.name,
                quantity: item.quantity,
                total: item.total,
                price: item.price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
