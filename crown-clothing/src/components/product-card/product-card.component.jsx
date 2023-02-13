import { useContext } from 'react';
import { CartContext } from '../../contexts/carts.context';
import './product-card.style.scss'
import Button from '../button/button.component'

const ProductCard = ({ product })=>{
    const { name,price,imageUrl } = product;
    const { addItemToCart} = useContext(CartContext);

    const addToCart = () => {
        addItemToCart(product)
    } 
    return(
        <div className="product-card-container">
            <img src={ imageUrl } alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType='inverted' onClick={addToCart}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard