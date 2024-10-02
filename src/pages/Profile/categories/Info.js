import React, { useContext } from "react";
import "./Info.css";
import { Context } from "../../../context/Context";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useMediaQuery } from "@mui/material";

function Info() {
  const { allorders, setAllOrders, rightSec, setRIghtSec } =
    useContext(Context);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div className="info">
      {isMobile ? (<div onClick={()=>setRIghtSec(false)}><ArrowBackIcon/></div>):""}
      <div style={{padding:'20px'}}>
      <div>User Details</div>
        <div className="item-sec">
          <label className="label">Name</label>
          <div className="item">Arjun Rathod</div>
        </div>
        <div className="item-sec">
          <label className="label">Address</label>
          <div className="item">Wadgaon Budrukh</div>
        </div>
        <div className="item-sec">
          <label className="label">Mobile NO.</label>
          <div className="item">+917350887544</div>
        </div>
        <div className="item-sec">
          <label className="label">Password</label>
          <div className="item">ar885209</div>
        </div>
        <div className="item-sec">
          <label className="label">Email Id</label>
          <div className="item">ar885209@gmai.com</div>
        </div>
      </div>
    </div>
  );
}

export default Info;
