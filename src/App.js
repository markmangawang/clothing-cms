// Stylesheet
import './App.css';

// Components
import Category from "./components/Categories/Categories.component";

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
        const { id, title } = category;
        return (
          <div className="">
            <Category title={title} key={id} />)
          </div>
        );
      })}
    </div>
  );
};

export default App;
