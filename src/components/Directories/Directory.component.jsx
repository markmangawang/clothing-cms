// Components
import Category from "../Categories/Categories.component"

// Styleshee
import "./directory.styles.scss"

const Directory =({categories})=> {
    return(
        <div className="directories-container">
        {categories.map((category) => {
          const { id, title, imageUrl } = category;
          return <Category title={title} key={id} imageUrl={imageUrl}/>;
        })}
      </div>
    )
}

export default Directory;