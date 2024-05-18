import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../store/product-action";

const Products = (props) => {
  const dispatch = useDispatch();
  //const [products, setProducts] = useState([]);
  //this variable will change into this new variable after calling this function ->-> from product-action.js file
  //dispatch(productSliceActions.updateProductFromServer(response.data)); 
  
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    dispatch(fetchProductData());
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item) => {
          return (
            <ProductItem
              title={item.name}
              price={item.price}
              description={item.description}
              id={item.id}
            />
          );
        })}
        {
          // <ProductItem
          //   title="Test"
          //   price={6}
          //   description="This is a first product - amazing!"
          // />
        }
      </ul>
    </section>
  );
};

export default Products;
