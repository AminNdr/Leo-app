import { Link } from 'react-router-dom';
import Logo from './Logo';
import PageTitle from './PageTitle';
import './HeaderBar.css';
const HeaderBar = (props) => {

    return (
        <div className="HeaderBar__container">
            <PageTitle pageTitle={props.pageTitle}/>
            
            <Link to = '/'>
            <Logo />
            </Link>
        
        </div>
    )
};

export default HeaderBar;