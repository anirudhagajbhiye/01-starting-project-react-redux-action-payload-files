// This file will work as a bring data from server and set in redux

import { productSliceActions } from "./product-slice";
import { cartSliceActions } from "./cart-slice";
import { increaseCartItem } from "./cart-actions";
export const fetchProductData = () => {
  return async (dispatch) => {
    const temp = await fetch("http://localhost:8765/api/products.json");
    const response = await temp.json();
    console.log(response);

    dispatch(productSliceActions.updateProductFromServer(response.data));
    //when this function will call data will update on where product-slice file  is created through product-reducer
    //i.e. in Product.js file
  };
};

export const addProductToCart = (id, price, title) => {
  return async (dispatch) => {
    const cartResponse = await fetch(
      `http://localhost:8765/api/products/productExist.json? id=${id}`
    );

    const cartResponseJSON = await cartResponse.json();

    if (cartResponseJSON.success == true) {
      //alert("Product Found");

      const cart = cartResponseJSON.data;

      dispatch(
        increaseCartItem(cart.id, cart.quantity, cart.total, cart.price)
      );
    } else {
      //alert("Product Not Found");
    }

    const response = await fetch(`http://localhost:8765/api/carts.json`, {
      method: "POST",

      body: JSON.stringify({
        total: 1 * price,
        quantity: 1,
        product_id: id,
        price: price,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const responseJson = await response.json();

    console.log(responseJson);

    dispatch(
      cartSliceActions.add({
        id: responseJson.data.id,
        title: title,
        price: price,
        total: 1 * price,
        quantity: 1,
        product: { name: title },
      })
    );
  };
};
