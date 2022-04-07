// Components
import Categories from "./components/Categories/Categories";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Womens",
    },
    {
      id: 5,
      title: "Mens",
    },
  ];

  return (
    <div className="App">
      {categories.map((category) => {
        const { title, id } = category;
        return <Categories title={title} key={id} />;
      })}
    </div>
  );
};

export default App;
