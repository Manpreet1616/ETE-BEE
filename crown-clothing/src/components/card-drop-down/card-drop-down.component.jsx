import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/carts.context'
import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'
import './card-drop-down.style.scss'

const CartDropDown = ()=>{
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate()
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.map((item)=> <CartItem key={item.id} cartItem={item}/>)
                }
            </div>
            <Button children={'CHECKOUT'} onClick={()=>navigate('/checkout')}/>
        </div>
    )
}

export default CartDropDown;