import './CardHeader.css';
const CardHeader =(props) =>{

    return(
        <div className="cardheader__container">
            <h3>{props.title}</h3>
            <h3>تاریخ <span>{props.date}</span></h3>
        </div>
    )
}
export default CardHeader;