import React from "react";
import { FaSearch } from "react-icons/fa";
import "./shop_home.css";
import RecentItem from "../shop/recent_item/recent_item";
const ShopHome = () => {
  return (
    <div>
      <div className="uper_block">
        <div className="manipulate">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <FaSearch className="search-icon" />
          </div>
          <div className="filter">
            <select name="filter" id="filter">
              <option value="all">All</option>
              <option value="new">Plastic</option>
              <option value="popular">Iron</option>
              <option value="sale">Cloth</option>
            </select>
            <select name="priceFilter" id="priceFilter">
              <option value="ascending">Price: Ascending</option>
              <option value="descending">Price: Descending</option>
            </select>
            <button className="filter-button">Filter</button>
          </div>
        </div>
        <div className="re_item">
          <RecentItem />
        </div>
      </div>
    </div>
  );
};

export default ShopHome;
