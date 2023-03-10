import { useContext } from 'react'
import CheckoutItem from '../../components/checkout-list/checkout-item.component';
import { CartContext } from '../../contexts/carts.context'
import './checkout.style.scss'

const CheckoutPage = ()=>{
    const { cartItems,cartItemTotal } = useContext(CartContext);
    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                    cartItems.map((item)=>{
                        return <CheckoutItem cartItem={item}/>
                    })
            }
            <span className='total'>Total: ${cartItemTotal}</span>
        </div>
    )
}

export default CheckoutPage