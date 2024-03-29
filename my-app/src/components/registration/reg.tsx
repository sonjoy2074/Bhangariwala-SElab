import React from "react";
import "./reg.css";
import Img1 from "../../assets/image/registration/reg.png";
const reg = () => {
  return (
    <div>
      <section className="refPage">
        <div className="regImg">
          <img src={Img1} alt="" />
        </div>
        <div className="userInfo">
          <div className="uname">
            <input type="text" placeholder="First Name.." />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <input type="text" placeholder="Phone No." />
          <textarea name="location" id="" placeholder="Loctaion"></textarea>
          <div className="datePicker">
            <input type="date"  placeholder="Date of brith"/>
          </div>
          <a href="">Alredy have an accout?</a>
          <button className="subBtn">Submitt</button>
        </div>
      </section>
    </div>
  );
};

export default reg;
