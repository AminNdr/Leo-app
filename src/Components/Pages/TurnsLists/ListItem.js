import "./ListItem.css";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import EditPage from "../EditPage/EditPage";
import Context from "../../../Context/Context";
const ListItem = (props) => {


  const [list, setList] = useContext(Context);





  let statusIconSrc = "";
  if (props.status == "complete") {
    statusIconSrc = "./assets/images/completed.svg";
  } else if (props.status == "canceled") {
    statusIconSrc = "./assets/images/canceled.svg";
  } else {
    statusIconSrc = "./assets/images/unstate.svg";
  }


  const serviceToPersian = () => {
    if (props.service == "hairCut") {
      return "کوتاهی مو";
    } else if (props.service == "skinCleanUp") {
      return "پاکسازی پوست";
    } else if (props.service == "dryer") {
      return "سشوار";
    } else if (props.service == "creatine") {
      return "کراتین";
    }
  };


  const deleteItemHandler = (event) =>{

    

    let tempList = list.filter((item)=>item.id != props.id);

    localStorage.setItem('list' ,JSON.stringify(tempList));

    setList(tempList);
  }

  return (
    <div>
      <div className="listItem__container">
        <div className="listItem__name">
          <img
            id={props.id}
            onClick={props.statusChanger}
            src={statusIconSrc}
          ></img>
          <span>{props.name}</span>
        </div>
        <div className="listItem__service">
          <span>{serviceToPersian()}</span>
        </div>
        <div className="listItem__phone">
          <span>{props.phone}</span>
        </div>
        <div className="listItem__icons">
          <Link
            to={{
              pathname: "/edit",
              state: {
                id: props.id,
                name: props.name,
                service: props.service,
                phone: props.phone,
              },
            }}
          >
            <img src="./assets/images/edit.svg"></img>
          </Link>
          <img src="./assets/images/trash.svg" onClick={deleteItemHandler}></img>
        </div>
      </div>
    </div>
  );
};
export default ListItem;
