import HeaderBar from "../../Shared/HeaderBar";
import EditPageForm from "./EditPageForm";
import Card from '../../Shared/Card';
const EditPage = (props) => {
    console.log(props.location);
    return(
        
        <div>
            <HeaderBar pageTitle= 'ثبت نوبت جدید' />
            
            <Card>
            <EditPageForm/>
            </Card>
        </div>
    )
}

export default EditPage;