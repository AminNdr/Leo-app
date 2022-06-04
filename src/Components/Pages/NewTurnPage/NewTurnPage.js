import HeaderBar from "../../Shared/HeaderBar";
import NewTurnForm from "./NewTurnForm";
import Card from '../../Shared/Card';
const NewTurnPage = (props) => {
    return(
        <div>
            <HeaderBar pageTitle= 'ثبت نوبت جدید' />
            
            <Card>
            <NewTurnForm/>
            </Card>
        </div>
    )
}

export default NewTurnPage;