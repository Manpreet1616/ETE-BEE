import { Routes,Route } from 'react-router-dom'
import Category from '../../components/category/category.component'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import './shop.style.scss'

const Shop = ()=>{
    return(
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path="/:id" element={<Category/>}/>
        </Routes>
    )
} 


export default Shop