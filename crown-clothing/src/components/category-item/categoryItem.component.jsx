import { useNavigate } from 'react-router-dom'
import './categoryItem.style.scss'


const CategoryItem = ({id,imageUrl,title}) =>{
    const navigate = useNavigate()
    return(
        <div className="category-container" key={id} onClick={()=>navigate(`/shop/${title}`)}>
            <div className="background-image" style={{
                backgroundImage:`url(${imageUrl})`
            }}/>
            <div className="category-body-container">
                <h2>{title.toUpperCase()}</h2>
                <p>shop now</p>
            </div>
        </div>
    )
}

export default CategoryItem;