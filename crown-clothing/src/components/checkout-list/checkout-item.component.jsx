import { useContext } from 'react';
import { CartContext } from '../../contexts/carts.context';
import './checkout-item.style.scss'


const CheckoutItem = ({cartItem})=>{
    const { clearItemFromCart,addItemToCart,removeToCartItem } = useContext(CartContext)
    const { name,imageUrl,price,quantity} = cartItem;

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}.img`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={()=>removeToCartItem(cartItem)}>
                    &#10094;
                </div>
                <div className="value">{quantity}</div>
                <div className="arrow"  onClick={()=>addItemToCart(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={()=>clearItemFromCart(cartItem)}>&#10005;</span>
        </div>
    )
}

export default CheckoutItem