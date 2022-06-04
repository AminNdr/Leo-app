import { Link } from "react-router-dom";
import IntroBtn from "./IntroBtn";
import "./HomePage.css";
import HeaderBar from "../../Shared/HeaderBar";
const HomePage = () => {
  return (
    <div>
    <HeaderBar pageTitle= 'نوبت دهی آرایشگاه لئو'/>
    <div className="mainnav__container">
      <Link to="/newTurn">
      <IntroBtn
        title="نوبت جدید"
        imgSrc="assets/images/img1.png"
        imgAlt="Image1"
      />
      </Link>
      <Link to= '/Turns'>
      <IntroBtn
        title="لیست نوبت ها"
        imgSrc="assets/images/img2.png"
        imgAlt="Image1"
      />
      </Link>
    </div>
    </div>
  );
};

export default HomePage;