import {FC, useState} from 'react'
import {useForm} from 'react-hook-form'
import {SubmitButton} from '../SubmitButton'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import '../../styles/accounts/signIn.scss';


interface IFormInputs {
    emailOrPhone: string;
    password: string;
    keep_me:boolean;
}

const schema = yup.object().shape({
    emailOrPhone: yup.string().required(' Email/Password is required'),
    password: yup.string().required('Password is required'),
});


const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false)

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="siginInForm">
                    <div className="emailOrPhone">
                        <input type="text" className='emailControl' placeholder='Phone Number / Email Address' {...register('emailOrPhone')} />
                        <p className='errorMsg genderError'>{errors.emailOrPhone?.message}</p>
                    </div>
                    <div className="passwordContainer">
                    <div className="password">
                            <input 
                                className='passwordControl' 
                                type={`${showPassword?'text':'password'}`}
                                id='password' 
                                autoComplete="new-password"
                                autoCorrect="off"
                                placeholder='Password'
                                {...register('password')}
                            />
                                <p
                                    className='showHideBtn' 
                                    onClick={()=>setShowPassword(!showPassword)}
                                >
                                    {showPassword?'Hide':'Show'}  
                                </p>    
                        </div>
                        <p className='errorMsg genderError'>{errors.password?.message}</p>
                    </div>
                   
                </div>
                <div className="forgetPassword">
                    <button className='forgetPasswordBtn'>Forget your password?</button>
                </div>
                <div className="keepMeSignIn">
                <label className="checkContainer" htmlFor='keepMeSignIn'>
                    <input type="checkbox" id='keepMeSignIn' {...register('keep_me')} />
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
