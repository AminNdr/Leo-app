import CurrentTurnsList from "./CurrentTurnsList";
import CanceledTurnsList from "./CanceledTurnsList";
import HeaderBar from "../../Shared/HeaderBar";
import Card from '../../Shared/Card'
import './TurnsPage.css';
const TurnsPage = () => {

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

  getLocalList();

  
  return (
    <div>
        <HeaderBar pageTitle= 'لیست نوبت ها'/>
      <div className="turnspage__container">
        <Card>
        <CurrentTurnsList list={list}  />
        </Card>
        <Card>
        <CanceledTurnsList list={list} />
        </Card>
      </div>
    </div>
  );
};

export default TurnsPage;
