import { useContext } from 'react'
import { CartContext } from '../../contexts/carts.context'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss'

const CartIcon = ()=>{
    const { isCartOpen,setIsCartOpen,cartItemCount } = useContext(CartContext)

    const cartToggel = ()=> {
        if(isCartOpen){
            setIsCartOpen(false);
        }else{
            setIsCartOpen(true);
        }
    }
    return(
        <div className='cart-icon-container' onClick={cartToggel}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartItemCount}</span>
        </div>
    )
}

export default CartIcon;