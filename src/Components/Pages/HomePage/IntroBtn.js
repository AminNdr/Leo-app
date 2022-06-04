import './IntroBtn.css';
const IntroBtn = (props) => {
  return (
    <div className="introbtn__container">
      <div className="introbtn__img">
          <img src={props.imgSrc} alt={props.alt}/>
      </div>
      <span>{props.title}</span>
    </div>
  );
};

export default IntroBtn;
