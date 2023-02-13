import { Fragment,useContext } from "react";
import { Link, Outlet } from "react-router-dom"
import {ReactComponent } from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/carts.context";
import { signOutUser } from "../../utils/firebase/firebase.util";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import './navigation.style.scss'
import CartDropDown from "../../components/card-drop-down/card-drop-down.component";

const Navigation = ()=>{
    const { currentUser,setCurrentUser } = useContext(UserContext)
    const { isCartOpen,setIsCartOpen } = useContext(CartContext)

    const signOutHandler = async ()=>{
        const res = await signOutUser()
        console.log(res)
        setCurrentUser(null)
    }

    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <ReactComponent/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    SHOP                
                </Link>
                {
                    currentUser ? (
                        <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>)
                        :( <Link className="nav-link" to="/auth">
                                SIGN IN             
                            </Link>
                    )
                }
                <CartIcon/>
            </div>
            {
                isCartOpen && <CartDropDown/>
            }
        </div>
        <Outlet/>
      </Fragment>
    )
}

export default Navigation;