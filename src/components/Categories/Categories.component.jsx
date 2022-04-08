//Stylesheet
import "../../styles/Categories/categories.styles.scss";

const Category = ({ title }) => {
  return (
    <div className="category">
      <div className="background-image"></div>
      <div className="category__body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default Category;
