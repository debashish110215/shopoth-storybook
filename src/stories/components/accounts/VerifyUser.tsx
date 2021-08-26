import {FC, useState} from 'react'
import {useForm} from 'react-hook-form'
import {SubmitButton} from '../SubmitButton'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import '../../styles/accounts/accounts.scss';

interface IFormInputs {
    emailOrPhone: string;
}

const schema = yup.object().shape({
    emailOrPhone: yup.string().required(' Email/Password is required')
});


const VerifyUser = () => {
    const [showPassword, setShowPassword] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: IFormInputs) => console.log(data);
    return (
        <div className='accountContainer'>
            <div className="shopothLogo">
            <img className='shopothLogoImg' src="./shopoth.svg" alt="shopoth icon" />
            </div>
            <div className="shopothTitle">
                <h2>Send OTP</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="accountForm">
                    <div className="emailOrPhone">
                        <input type="text" className='formControl' placeholder='Phone Number / Email Address' {...register('emailOrPhone')} />
                        <p className='errorMsg '>{errors.emailOrPhone?.message}</p>
                    </div>
                </div>
             
                <div className="submitBtn">
                    <SubmitButton label='Send OTP' color='cart'/>
                </div>
              
            </form>
          
        </div>
    
    )
}

export default VerifyUser
