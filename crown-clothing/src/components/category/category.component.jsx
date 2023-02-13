import { useContext,useState,useEffect, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { useParams } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component';
import './category.style.scss'

const Category = ()=>{
    const category = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        setProducts(categoriesMap[category.id])
    },[categoriesMap,category])

    return(
        <Fragment>
            <h2><span>{category.id.toUpperCase()}</span></h2>
            <div className='category-container-1'>
                {products && products.map((product)=><ProductCard key={product.id} product={product}/>)}
            </div>
        </Fragment>
    )
}

export default Category