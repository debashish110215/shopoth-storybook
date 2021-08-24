import {FC, useState} from 'react'
import {useForm} from 'react-hook-form'
import {SubmitButton} from '../SubmitButton'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import '../../styles/accounts/signIn.scss';



interface IFormInputs {
    current_password: string
    new_password: string
    confirm_password: string
}

const schema = yup.object().shape({
    current_password: yup.string().required('Current password is required'),
    new_password: yup.string().required('New password is required'),
    confirm_password: yup.string().required('Confirm password is required'),
});

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [key, setKey] = useState('')

    const handleShowPassword = (value:string) =>{
        setShowPassword(!showPassword)
        setKey(value)
    }
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: IFormInputs) => console.log(data);
    return (
        <div className='signInContainer'>
            <div className="shopothLogo">
                <p>Shopoth</p>
            </div>
            <div className="shopothTitle">
                <h2>Sign in to your Shopoth account</h2>
                <p>It's great to see you again. Sign in to continue</p>
            </div>
            <form action="">
                <div className="siginInForm">
                    <div className="emailOrPhone">
                        <input type="text" className='emailControl' placeholder='Phone Number / Email Address' />
                    </div>
                    <div className="password">
                        <input 
                            className='passwordControl' 
                            type={`${(key ==='new_password' && showPassword)?'text':'password'}`}
                            id='new_password' 
                            placeholder='Password'
                            {...register('new_password')}
                        />
                        
                            <button 
                                className='showHideBtn' 
                                type='button' 
                                onClick={()=>handleShowPassword('current_password')}
                            >
                                {(key ==='current_password' && showPassword)?'Hide':'Show'}  
                            </button>
                    
                    </div>
                </div>
                <div className="forgetPassword">
                    <button className='forgetPasswordBtn'>Forget your password?</button>
                </div>
                <div className="keepMeSignIn">
                <label className="checkContainer">
                    <input type="checkbox" id='agreement' />
                    <span className="checkmark checkmarkRound"></span>
                    <span className="checkboxLabel">Keep me signed in</span>
                </label>
                    <p>Uncheck if using a public device</p>
                </div>
                <div className="signInBtn">
                    <SubmitButton label='Sign In' color='cart'/>
                    <p>Don't have an account? <span className='createAnAccount'>Create an Account</span> </p>
                </div>
              
            </form>
          
        </div>
    
    )
}

export default SignIn
