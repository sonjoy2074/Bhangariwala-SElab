import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./all_card.css"; // Import your CSS file for styling

const RecentItem = ({ item }: { item: any }) => {
  const { id, productName, price, description, productImage,userInfoID } = item;
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState("");
  const [sellerInfo, setSellerInfo] = useState<any>({});

  useEffect(() => {
    // Convert base64 string to image URL
    if (productImage) {
      const imageURL = `data:image/jpeg;base64,${productImage}`;
      setImageSrc(imageURL);
    }
    
    // Fetch seller information based on UserInfoID
    const fetchSellerInfo = async () => {
      try {
        const response = await axios.post<any>("http://192.168.31.9:91/api/user/userInfoById", {
          userId: userInfoID
        });
        setSellerInfo(response.data);
      } catch (error) {
        console.error("Error fetching seller information:", error);
      }
    };

    fetchSellerInfo();
  }, [productImage, userInfoID]);

  const handleApproachToBuy = () => {
    // Navigate to the product details page with the product ID
    navigate(`/item-details/${id}`);
  };

  return (
    <div className="card-items">
      <img src={imageSrc} alt="Product" className="product-image" />
      <div className="product-details">
        <div className="single-part">
          <h2 className="product-name">{productName}</h2>
          <p className="poste-time">10 min ago</p>
        </div>
        <h2 className="product-price">Price: {price} tk</h2>
        <p className="short-description">{description}</p>
        <p className="seller-name">Sller: {`${sellerInfo.firstName} ${sellerInfo.lastName}`}</p>
        <button className="buy-now-button" onClick={handleApproachToBuy}>
          Proceed to Buy
        </button>
      </div>
    </div>
  );
};

const RecentItemList = () => {
  const [recentItemsData, setRecentItemsData] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecentItems = async () => {
      try {
        const response = await axios.post<any[]>("http://192.168.31.9:91/api/product/productViewList", {});
        const filteredItems = response.data.filter((item) => item.productStatus === "1");
        setRecentItemsData(filteredItems);
      } catch (error) {
        console.error("Error fetching recent items:", error);
      }
    };

    fetchRecentItems();
  }, []);

  return (
    <div className="card-container">
      {recentItemsData.map((item) => (
        <RecentItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default RecentItemList;
