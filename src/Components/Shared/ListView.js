import ListItem from "../Pages/TurnsLists/ListItem";
import React, { useState, useEffect, useContext } from "react";
import Context from "../../Context/Context";

const ListView = (props) => {
  // const [list, setList] = useState([]);

  const [list, setList] = useContext(Context);
  let tempList;

  let currentDay = props.date.getDay();
  let currentMonth = props.date.getMonth();
  let currentYear = props.date.getFullYear();




  const StatusChangeHandler = (event) => {
    event.preventDefault();
    let index = list.findIndex(item=>item.id == event.target.id);
    console.log(index);
    console.log(list[index])
    let newTurn = list[index];
    if (newTurn.status == "unstate") {
      newTurn.status = "complete";
    } else if (newTurn.status == "complete") {
      newTurn.status = "canceled";
    } else {
      newTurn.status = "unstate";
    }
    tempList = list;
    tempList[event.target.id] = newTurn;

    localStorage.setItem("list", JSON.stringify(tempList));
    setList(JSON.parse(localStorage.getItem("list")));
    
  };




  let filteredList = list.filter((item) => {
    if (props.type === "all") {
      return true;
    } else {
      return item.status === props.type;
    }
  });

  filteredList = filteredList.filter((item) => {
    let itemDate = new Date(item.date);

    let itemCurrentDay = itemDate.getDay();
    let ItemCurrentMonth = itemDate.getMonth();
    let ItemCurrentYear = itemDate.getFullYear();
    if (
      itemCurrentDay === currentDay &&
      ItemCurrentMonth === currentMonth &&
      currentYear === ItemCurrentYear
    ) {
      // console.log(`OK : ${itemCurrentDay}    is equal to    ${currentDay}`)
      return true;
    } else {
      // console.log(`NOOOO : ${itemDate}    not equal to    ${currentDay}`)
      return false;
    }
  });
  return (
    <div className="listView__container">
      {filteredList.map((item) => {
        return (
          <ListItem
            key={item.date}
            id={item.id}
            status={item.status}
            name={item.name}
            phone={item.phone}
            service={item.service}
            statusChanger={StatusChangeHandler}
          />
        );
      })}
    </div>
  );
};
export default ListView;
