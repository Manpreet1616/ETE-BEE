import CategoryItem from "../category-item/categoryItem.component";
import './directory.style.scss'

const Directory = ({categories})=>{
    return(
        <div className="categories-container">
            {categories.map(({id,title,imageUrl})=>(
                <CategoryItem key={id} id={id} title={title} imageUrl={imageUrl}/>
            ))}
    </div>
    )
}

export default Directory;