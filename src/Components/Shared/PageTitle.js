import "./PageTitle.css";
const PageTitle = (props) => {
  return (
    <div className="pagetitle__container">
      <span>{props.pageTitle}</span>
    </div>
  );
};

export default PageTitle;
