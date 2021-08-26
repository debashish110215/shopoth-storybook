import { useState} from 'react'
import {useForm} from 'react-hook-form'
import {SubmitButton} from '../SubmitButton'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import '../../styles/accounts/accounts.scss';


interface IFormInputs {
    phone: string;
    otp_number:string;
    password:string;
    confirm_password:string;
}

const schema = yup.object().shape({
    phone: yup.string()
            .required('Phone is required') 
            .matches(/(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/, "Please provide valid BD phone number"),
    otp_number: yup.string().required(' OTP number is required'),
    password: yup.string()
            .required(' Password is required')
            .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,"At least one number and one uppercase and lowercase letter, and more than 8 characters"),
    confirm_password:yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
     });


const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  
    const { register, handleSubmit, formState: { errors }, control } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
    });


 
    const onSubmit = (data: IFormInputs) => console.log(data);
    return (
        <div className='accountContainer'>
            <div className="shopothLogo">
            <img className='shopothLogoImg' src="./shopoth.svg" alt="shopoth icon" />
            </div>
            <div className="shopothTitle">
                <h2>Reset Password</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="accountForm">
                    <div className="phone">
                        <input 
                            type="text" 
                            className='formControl' 
                            placeholder='Phone Number' 
                            {...register('phone')} 
                        />
                        <p className='errorMsg'>{errors.phone?.message}</p>
                    </div> 
                    <div className="otpNumber">
                        <input 
                            type="text" 
                            className='formControl' 
                            placeholder='Enter OTP Code' 
                            {...register('otp_number')} 
                            autoComplete="new-email"
                            autoCorrect="off" 
                        />
                        <p className='errorMsg'>{errors.otp_number?.message}</p>
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
                        <p className='errorMsg'>{errors.password?.message}</p>
                  </div>

                  <div className="confirmPasswordContainer">
                    <div className="confirmPassword">
                            <input 
                                className='passwordControl' 
                                type={`${showConfirmPassword?'text':'password'}`}
                                id='confirmPassword' 
                                autoComplete="new-password"
                                autoCorrect="off"
                                placeholder='Confirm Password'
                                {...register('confirm_password')}
                            />
                                <p
                                    className='showHideBtn' 
                                    onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword?'Hide':'Show'}  
                                </p>    
                        </div>
                        <p className='errorMsg'>{errors.confirm_password?.message}</p>
                  </div>
                   
                </div>
            
                <div className="submitBtn">
                    <SubmitButton label='Reset' color='cart'/>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword
