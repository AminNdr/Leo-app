import React from 'react';
import './CurrentTurnsList.css';
import CardHeader from '../../Shared/CardHeader';
import ListView from '../../Shared/ListView';
import CardFooter from '../../Shared/CardFooter';

const CurrentTurnsList = (props) =>{

    let currentDate = new Date();

    let completeList = props.list.filter(item=>{
        return item.status == "complete";
    })
    
    return (
    <div className="CurrentTurnsList__container">
        <CardHeader date={currentDate.toLocaleString("fa-IR" , {weekday: "long",year:"numeric",month:"numeric", day:"numeric"})} title='نوبت های جاری'/>
        <ListView list={props.list} type={'all'} date={currentDate}/>
        <CardFooter completed={completeList.length} all={props.list.length} type="currentTurns"/>
    </div>
    )
}

export default CurrentTurnsList;