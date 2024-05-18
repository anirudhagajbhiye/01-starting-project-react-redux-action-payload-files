import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { fetchCartData } from "./components/store/cart-actions";

function App() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.ui.cartIsVisible);

  useEffect(() => {
    dispatch(fetchCartData());
  });
  return (
    <Layout>
      {show && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
