import { useState,useContext } from "react"
import { createUserDocumentFromAuth,signInWithGooglePopup,SignIneUserWithEmailAndPassword } from '../../utils/firebase/firebase.util'
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
import './sign-in-form.style.scss'

const defaultFormField = {
    email:'',
    password:'',
} 

const SignInForm = ()=>{
    const [formFields,setFormFields] = useState(defaultFormField);
    const { email,password } = formFields;

    const handelChange = (event) =>{
        const {name,value} = event.target
        setFormFields({...formFields,[name]:value});
    } 

    const resetFormFields = ()=>{
        setFormFields(defaultFormField)
    }

    const submit =async (event)=>{
        event.preventDefault();
        try {
            const { user } = await SignIneUserWithEmailAndPassword(email,password);
            resetFormFields();
        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Incorrect Password For Email');
                    break;
                case 'auth/user-not-found':
                    alert('No user with associate email found');
                    break;
                default:
                    console.log(error);
            }        
        }
    }

    const SignInWithGoolge = async()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div className="sign-up-container">
            <h2>Already Have an account?</h2>
            <span>Sign In With Email and Password</span>
            <form onSubmit={submit}>
                <FormInput 
                required 
                type={"email"} 
                onChange={handelChange} 
                label="Email" 
                name="email" 
                value={email}/>

                <FormInput 
                required 
                type={"password"} 
                onChange={handelChange} 
                name="password" 
                label="Password" 
                value={password}/>

                <div className="buttons-container">
                    <Button children={"Sign In"} type="submit" buttonType={""}/>
                    <Button children={"Google Sign In"} onClick={SignInWithGoolge} buttonType={"google"}/>
                </div>
            </form>
        </div>
    )
}

export default SignInForm