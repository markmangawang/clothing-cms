//Stylesheet
import '../../styles/Categories/categories.styles.scss';

const Category = ({ title }) => {
  return (
    <div className="category">
      <div className="category__body">
        <img></img>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default Category;
