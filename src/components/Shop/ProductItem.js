import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import { cartSliceActions } from "../store/cart-slice";
import classes from "./ProductItem.module.css";
import { addProductToCart } from "../store/product-action";

function ProductItem(props) {
  const { title, price, description, id } = props;

  const dispatch = useDispatch();

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button
            onClick={async () => {
              dispatch(addProductToCart(id, price, title));
            }}
          >
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
