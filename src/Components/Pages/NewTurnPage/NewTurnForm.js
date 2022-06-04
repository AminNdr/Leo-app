import "./NewTurnForm.css";

import Context from "../../../Context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const NewTurnForm = () => {
 const history = useNavigate();
  const [mainList,setMainList] = useContext(Context);
  //create an empty list
  let list = []; 

  //get the list from Local Storage
  const getLocalList = () => {
    let localData = localStorage.getItem("list");
    if (localData == null) {
      list = [];
    } else {
      list = JSON.parse(localStorage.getItem("list"));
    }
  };

  //set the new item to the local storage
  const setLocalList = () => {
    localStorage.setItem("list", JSON.stringify(list));
  };

  //the form Submit Handler
  const submitHandler = (event) => {
    event.preventDefault();
    getLocalList();
    let counter = 0;
    if(list.length>0){
      counter = list[list.length-1].id + 1;
    }
    let newTurn = {
      id : counter,
      status: "unstate",
      name: event.target.name.value,
      phone: event.target.phone.value,
      service: event.target.services.value,
      date: new Date(event.target.date.value),
    };

    list.push(newTurn);
    setLocalList();
    setMainList(list);
    history("/");
  };

  return (
    <div className="newTurnForm__container">
      <form onSubmit={submitHandler} > 
       
        <div className="newturnform__control">
          <label for="name">نام و نام خانوادگی</label>
          <input type="text" name="name" />
        </div>
        <div className="newturnform__control">
          <label for="phone">شماره تماس</label>
          <input type="text" name="phone" />
        </div>

        <div className="newturnform__control">
          <label for="service">نوع خدمت</label>
          {/* <input type="text" name="service" /> */}

          <select id='services' name='services'>
            <option value='hairCut'>کوتاهی مو</option>
            <option value='skinCleanUp'>پاکسازی پوست</option>
            <option value='dryer'>سشوار</option>
            <option value='creatine'>کراتین</option>

          </select>
        </div>

        <div className="newturnform__control">
          <label for="date" placeholder="روز/ماه/سال">تاریخ</label>
          <input type="date" name="date"/>
        </div>

        <div className="newturnform__actions">
          <button type="submit">ثبت نوبت</button>
        </div>
      </form>
    </div>
  );
};

export default NewTurnForm;
