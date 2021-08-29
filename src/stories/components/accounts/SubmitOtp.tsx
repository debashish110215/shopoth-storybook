import {FC, useState} from 'react'
import {useForm} from 'react-hook-form'
import {SubmitButton} from '../SubmitButton'
import '../../styles/accounts/accounts.scss';

interface IFormInputs {
    otp: string;
}

const SubmitOtp = () => {
    const [showPassword, setShowPassword] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({});
    const onSubmit = (data: IFormInputs) => console.log(data);
    return (
        <div className='accountContainer'>
            <div className="shopothLogo">
            <img className='shopothLogoImg' src="./shopoth.svg" alt="shopoth icon" />
            </div>
            <div className="shopothTitle">
                <h2>Verify User</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="accountForm">
                    <div className="emailOrPhone">
                        <input type="text" className='formControl' placeholder='Enter OTP Code' {...register('otp')} />
                    </div>
                </div>
             
                <div className="submitBtn">
                    <SubmitButton label='Submit' color='cart'/>
                </div>
            </form> 
        </div>
    )
}

export default SubmitOtp
