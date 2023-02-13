import { useContext,Fragment } from "react"
import { CategoriesContext } from "../../contexts/categories.context"
import CategoryPreview from '../../components/category-preview/category-preview.component'
import './categories-previews.style.scss'

const CategoriesPreview = ()=>{
    const {categoriesMap} = useContext(CategoriesContext)
    return(
        <Fragment>
            {
                Object.keys(categoriesMap).map(title=>{
                    return <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
                })
            }
        </Fragment>
    )
} 


export default CategoriesPreview