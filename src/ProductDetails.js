import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data from the local JSON file (replace 'products.json' with your JSON file)
    axios.get("/data/products.json").then((response) => {
      const product = response.data.find((p) => p.id === parseInt(id, 10));
      setProduct(product);
    });
  }, [id]);

  const handleAddToCart = () => {
    // Implement your logic to add the product to the cart
    // For simplicity, we'll use local storage here
    const existingCartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    existingCartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCartItems));
    alert("Product added to cart!");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const { name, image, price, quantity } = product;

  return (
    <div>
      <h2>Product Details</h2>
      <img src={image} alt={name} />
      <p>Name: {name}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
