import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartSliceActions } from "../store/cart-slice";
import { decreaseCartItem, increaseCartItem } from "../store/cart-actions";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;

  const dispatch = useDispatch();

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button
            onClick={async () => {
              dispatch(decreaseCartItem(id, quantity, total, price));
            }}
          >
            -
          </button>
          <button
            onClick={async () => {
              dispatch(increaseCartItem(id, quantity, total, price));
            }}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
