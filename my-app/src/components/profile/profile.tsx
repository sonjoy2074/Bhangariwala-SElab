import React from "react";
import "./profile.css";
import Table from "./profileTable";
import Img1 from "../../assets/image/profile/profile-img.png";
import { RiUserReceived2Fill } from "react-icons/ri";
import { FaTruckFast } from "react-icons/fa6";
import { GiBeachBag } from "react-icons/gi";
import { FaTruckArrowRight } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";

const Profile = () => {
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");

  return (
    <div>
      <div className="profile-setion1">
        <div className="p-img">
          <img src={Img1} alt="" />
          <h1>
            Name: {user.firstName} {user.lastName}
          </h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Location: {user.location}</p>
          <h2>Total income: 2000tk</h2>
          <h2>Environmental Impact: You saved 20kg of CO2 emissions </h2>
        </div>
        <div className="p-adi">
          <h1>Track order</h1>
          <div className="progress-bar">
            <div className="progress-point"></div>
            <div className="progress-line"></div>
            <div className="progress-point"></div>
            <div className="progress-line"></div>
            <div className="progress-point"></div>
            <div className="progress-line"></div>
            <div className="progress-point"></div>
            <div className="progress-line"></div>
            <div className="progress-point"></div>
          </div>
          <div className="order-status">
            <div className="order-status-step">
              <p>Accept request</p>
              <RiUserReceived2Fill />
            </div>
            <div className="order-status-step">
              <p>On the way </p>
              <FaTruckFast />
            </div>
            <div className="order-status-step">
              <p>Ready your item</p>
              <GiBeachBag />
            </div>
            <div className="order-status-step">
              <p>Pickup complete</p>
              <FaTruckArrowRight />
            </div>
            <div className="order-status-step">
              <p>Payment</p>
              <MdPayment />
            </div>
          </div>
          <div className="order-his">
             <h1>Order History</h1>
             <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
