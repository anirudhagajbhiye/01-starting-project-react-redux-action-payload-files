// This file will work as a bring data from server and set in redux


import { cartSliceActions } from "./cart-slice";

//This is an example of redux thunk to fetch cart data

export const fetchCartData = () => {
  return async (dispatch) => {
    const temp = await fetch("http://localhost:8765/api/carts.json");
    const response = await temp.json();
    console.log(response);

    dispatch(cartSliceActions.updateItemFromServer(response.data));
  };
};

export const increaseCartItem = (id, quantity, total, price) => {
  return async (dispatch) => {
    const respone = await fetch(`http://localhost:8765/api/carts/${id}.json`, {
      method: "PUT",

      body: JSON.stringify({
        quantity: quantity + 1,
        total: total + price,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const responseJson = await respone.json();

    console.log(responseJson);
    dispatch(cartSliceActions.increaseItem(id));
  };
};

export const decreaseCartItem = (id, quantity, total, price) => {
  return async (dispatch) => {
    const respone = await fetch(`http://localhost:8765/api/carts/${id}.json`, {
      method: "PUT",

      body: JSON.stringify({
        quantity: quantity - 1,
        total: total - price,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const responseJson = await respone.json();

    console.log(responseJson);

    if (quantity - 1 == 0) {
      const responeDelete = await fetch(
        `http://localhost:8765/api/carts/${id}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const responseDeleteJson = await responeDelete.json();

      console.log(responseDeleteJson);
    }

    dispatch(cartSliceActions.decreaseItem(id));
  };
};

export const addToCart = () => {}
