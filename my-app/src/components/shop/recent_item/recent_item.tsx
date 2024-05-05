import React from "react";
import "./recent_item.css"; // Import your CSS file for styling
import Img1 from "../../../assets/image/blog/glass-jar-food-storing.jpg";

const recentItemsData = [
  {
    id: 1,
    name: "Product 1",
    price: 270,
    description: "Description 1",
    seller: "Seller 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 270,
    description: "Description 2",
    seller: "Seller 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: 270,
    description: "Description 3",
    seller: "Seller 3",
  },
  // Add more items as needed
];

const RecentItem = ({ item }: { item: any }) => {
  const { name,price,description, seller } = item;

  return (
      <div className="recent-item">
        <img src={Img1} alt="Product" className="product-image" />
        <div className="product-details">
        <div className="single-part">
            <h2 className="product-name">{name}</h2>
            <p className="poste-time">10 min ago</p>
          </div>
          <h2 className="product-price">Price: {price} tk</h2>
          <p className="short-description">{description}</p>
          <p className="seller-name">{seller}</p>
          <button className="buy-now-button">Aproce to Buy</button>
        </div>
      </div>
  );
};

const RecentItemList = () => {
  return (
    <div className="card-container">
      {recentItemsData.map((item) => (
        <RecentItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default RecentItemList;
