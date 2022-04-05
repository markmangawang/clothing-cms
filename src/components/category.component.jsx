const Category = ({ categories }) => {
  return (
    <div>
      {categories.map((category) => {
        return (
          <div className="category" key={category.id}>
            <div className="category__body">
            <img></img>
            <h2>{category.title}</h2>
            <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
