import "./CardFooter.css";
import React from "react";
const CardFooter = (props) => {

  let counts;
  if(props.type === "currentTurns"){
    counts = <React.Fragment><h3>خدمات ارائه شده : <span>{props.completed} نوبت </span></h3><h3>مجموع نوبت ها : <span>{props.all} نوبت </span></h3></React.Fragment>
  }else{
    counts =         <h3>
    کنسل شده : <span>{props.canceled} نوبت </span>
  </h3>
  }
  return (
    <div className="cardfooter__container">
      {counts}
    </div>
  );
};
export default CardFooter;
