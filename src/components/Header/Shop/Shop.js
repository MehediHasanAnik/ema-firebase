import React, { useEffect, useState } from "react";
import UseProducts from "../../../Hooks/UseProducts";
import Cart from "../../Cart/Cart";
import Product from "../../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = UseProducts();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
