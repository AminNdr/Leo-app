import {
    BrowserRouter , Routes, Route} from "react-router-dom";  
import './Layout.css';
import HomePage from '../Pages/HomePage/HomePage'; 
import NewTurnPage from '../Pages/NewTurnPage/NewTurnPage';
import TurnsPage from '../Pages/TurnsLists/TurnsPage';
import EditPage from '../Pages/EditPage/EditPage'

const Layout = () => {

    return (

        <div className='Layout__container'>
            <BrowserRouter>
            <Routes>
            <Route path="/" element = {<HomePage/>} />
            <Route path="/newTurn" element = {<NewTurnPage/>} />
            <Route path="/turns" element = {<TurnsPage/>} />
            <Route path="/edit" element = {<EditPage/>} />
            </Routes>
           </BrowserRouter>
        </div>
    )
};

export default Layout;