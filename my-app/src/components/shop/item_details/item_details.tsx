import React from "react";
import { motion } from "framer-motion";
import "./item_details.css";
import Img1 from "../../../assets/image/blog/glass-jar-food-storing.jpg";
const ItemDetails = () => {
  return (
    <div>
      <h1>Prodcut Details</h1>
      <div className="item-details-container">
        <motion.div
          className="image-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={Img1} // Replace with your product image URL
            alt="Product"
            className="item-image"
          />
        </motion.div>
        <motion.div
          className="details-container"
          initial={{ x: "100%" }} // Initial position from right
          animate={{ x: 0 }} // Animate to the center
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="item-name">Product Name</h1>
          <p className="item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="product-price">Price: $XX.XX</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ItemDetails;
