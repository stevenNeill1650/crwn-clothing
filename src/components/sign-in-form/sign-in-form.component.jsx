import { useState } from "react";
import { 
        signInWithGooglePopup,
        signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import { SignInContainer,SignInButtons } from "./sign-in-form.styles";
import Button,{BUTTON_TYPES_CLASSES} from "../button/button.component";




const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {  email, password} = formFields;

 

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            await signInAuthUserWithEmailAndPassword(email,password);          
            resetFormFields();
        } catch (error){
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }       
        }
    };


    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields,[name]: value});
    };


    return (
        <SignInContainer>
            <h2>I already have an acocunt</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput 
                    label ="Email"
                    type="email" 
                    required onChange={handleChange} 
                    name="email" 
                    value={email} 
                />
                <FormInput 
                    label ="Password"
                    type="password" 
                    required onChange={handleChange} 
                    name="password" 
                    value={password} 
                />
                <SignInButtons>
                    <Button type='submit'>Sign In</Button>
                    <Button buttonType={BUTTON_TYPES_CLASSES.google} onClick={signInWithGoogle} type='submit'>Google Sign in</Button>
                </SignInButtons>
                
            </form>
        </SignInContainer>
    )
}

export default SignInForm;