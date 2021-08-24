import {FC, useState} from 'react'
import {useForm} from 'react-hook-form'
import {SubmitButton} from '../SubmitButton'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import '../../styles/accounts/signUp.scss';



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

const SignUp = () => {
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
        <div className='signUpContainer'>
            <div className="shopothLogo">
                <p>Shopoth</p>
            </div>
            <div className="shopothTitle">
                <h2>Create your Shopoth account</h2>
              
            </div>
            <form action="">
                <div className="siginUpForm">
                    <div className="fullName">
                        <input type="text" className='inputControl' placeholder='Full Name' />
                    </div>
                    <div className="phone">
                        <input type="text" className='inputControl' placeholder='Phone Number ' />
                    </div>
                    <div className="email">
                        <input type="email" className='inputControl' placeholder='Email Address' />
                    </div>
                    <div className="gender">

                        <div className="male">
                            <label className="radioContainer " htmlFor="male">
                                <input type="radio" className="formControl" 
                                    id='male'
                                    value='male'
                                    name='gender'
                                   />
                                <span className="checkmark"></span>
                                <span className='labelTxt'> Male</span>  
                            </label>
                        </div>
                      
                        <div className="female">
                            <label className="radioContainer " htmlFor="female">
                                <input type="radio" className="formControl" 
                                    id='female'
                                    value='female'
                                    name='gender'
                                   />
                                <span className="checkmark"></span>
                                <span className='labelTxt'> Female</span>  
                            </label>
                        </div>
                        <div className="others">
                            <label className="radioContainer " htmlFor="others">
                                <input type="radio" className="formControl" 
                                    id='others'
                                    value='others'
                                    name='gender'
                                   />
                                <span className="checkmark"></span>
                                <span className='labelTxt'> Others</span>  
                            </label>
                        </div>

                    </div>
                    <div className="dob">
                        <input type="text" className='inputControl' placeholder='Date of Birth' />
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
            
                <div className="keepMeSignIn">
                <label className="checkContainer">
                    <input type="checkbox" id='agreement' />
                    <span className="checkmark "></span>
                    <span className="checkboxLabel">Keep me signed in</span>
                </label>
                    <p>Uncheck if using a public device</p>
                </div>


                <div className="emailMe">
                <label className="checkContainer">
                    <input type="checkbox" id='agreement' />
                    <span className="checkmark "></span>
                </label>
                    <p>Email me about special pricing.hot new items, gift ideas and more </p>
                </div>

                <div className="privacyPolicy">
                    <p>
                        By clicking Create Account, you acknowledge you have read and agreed to our
                         <span className='terms'>Terms of Use</span> 
                         and  <span className='privacy'>Privacy Policy</span>
                    </p>
                </div>
                <div className="signInBtn">
                    <SubmitButton label='Create Account' color='cart'/>
                    <p>Do you have an account? <span className='signIn'>Sign In</span> </p>
                </div>
              
            </form>
          
        </div>
    
    )
}

export default SignUp
