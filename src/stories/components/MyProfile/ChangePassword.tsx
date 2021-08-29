import {FC, useState} from 'react'
import {useForm} from 'react-hook-form'
import {SubmitButton} from '../SubmitButton'
import '../../styles/myProfile/changePassword.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

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

const ChangePassword:FC = () => {

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
        <div className='changePasswordWrapper'>
            <div className="changePasswordHeader">
                <h4>Change Password</h4>
                <p>For your security don’t share your password with anyone else.</p>
            </div>
            <div className="changePasswordForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formItem">
                    <label className='inputLabel' htmlFor="current_password">Current Password</label>
                    <div className="inputItem">
                        <input 
                            className='inputControl' 
                            type={`${(key ==='current_password' && showPassword)?'text':'password'}`}
                            id='current_password' 
                            {...register('current_password')} 
                        />    <div className="showHideBtnWrapper">
                            <button 
                                className='showHideBtn' 
                                type='button' 
                                onClick={()=>handleShowPassword('current_password')}
                            >
                                {(key ==='current_password' && showPassword)?'Hide':'Show'}  
                            </button>
                        </div>
                    
                    </div>
                    <p className='showError' style={{color:'red'}}>{errors.current_password?.message}</p>
                </div>

                <div className="formItem">
                    <label className='inputLabel' htmlFor="new_password">New Password</label>
                    <div className="inputItem">
                        <input 
                            className='inputControl' 
                            type={`${(key ==='new_password' && showPassword)?'text':'password'}`}
                            id='new_password' 
                            {...register('new_password')}
                        />
                        <div className="showHideBtnWrapper">
                            <button 
                                type='button' 
                                className='showHideBtn'
                                onClick={()=>handleShowPassword('new_password')}
                            >
                                {(key ==='new_password' && showPassword)?'Hide':'Show'}  
                            </button>
                        </div>
                    </div>
                    <p className='showError' style={{color:'red'}}>{errors.new_password?.message}</p>
                </div>
                <div className="formItem">
                    <label className='inputLabel' htmlFor="confirm_password">Confirm Password</label>
                    <div className="inputItem">
                        <input 
                            className='inputControl' 
                            type={`${(key ==='confirm_password' && showPassword)?'text':'password'}`}
                            id='confirm_password' 
                            {...register('confirm_password')}
                        />
                        <div className="showHideBtnWrapper">
                            <button 
                                type='button' 
                                className='showHideBtn' 
                                onClick={()=>handleShowPassword('confirm_password')}
                            >
                            {(key ==='confirm_password' && showPassword)?'Hide':'Show'}  
                            </button>
                        </div>
                    </div>
                    <p className='showError' style={{color:'red'}}>{errors.confirm_password?.message}</p>
                </div>
                <div className="submitBtn">
                    <SubmitButton label='Confirm Change' color='cart'/>
                </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword
