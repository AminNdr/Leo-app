import './CanceledTurnsList.css';
import CardHeader from '../../Shared/CardHeader';
import ListView from '../../Shared/ListView';
import CardFooter from '../../Shared/CardFooter';
import Context from '../../../Context/Context';
import { useContext } from 'react';
const CanceledTurnsList = () =>{

    const [list ,setList ] = useContext(Context);

    let currentDate = new Date();
    let currentDay = currentDate.getDay();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    // let list = JSON.parse (localStorage.getItem('list'));
    let filteredList = list.filter (item =>{
        return item.status == 'canceled';
    }
    );

    filteredList = filteredList.filter(item=>{
        let itemDate = new Date(item.date);
        let itemDay = itemDate.getDay();
        let itemYear = itemDate.getFullYear();
        let itemMonth = itemDate.getMonth();

        if (currentDay == itemDay && currentMonth == itemMonth && currentYear == itemYear){
            return true;
        }else{
            return false;
        }
    })



    return (
        <div className="CanceledTurnsList__container">
            <CardHeader title='نوبت های کنسل شده'/>
            <ListView list={filteredList} type={'canceled'} date={currentDate}/>
            <CardFooter canceled={filteredList.length} type="canceled"/>

        </div>
    )
}

export default CanceledTurnsList; 