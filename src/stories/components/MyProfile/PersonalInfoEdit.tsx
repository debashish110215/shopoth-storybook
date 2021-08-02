import {FC, useEffect} from 'react'
import '../../styles/myProfile/personalInfoEdit.scss';
import {Users} from './PersonalInfoContainer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useForm, Controller} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IFormInputs {
    name: string;
    email: string;
    phone: string;
    dob: Date;
}

const schema = yup.object().shape({
    name: yup.string().required('Name password is required'),
});


interface PersonalInfoEditProps{
    userDetails:Users
}
export const PersonalInfoEdit:FC<PersonalInfoEditProps> = ({userDetails}:PersonalInfoEditProps) => {


    const { register, handleSubmit, control,reset, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });
    useEffect(()=>{
        reset({
            name:userDetails.fullName,
            email:userDetails.email,
            phone:userDetails.phone,
            dob:new Date(userDetails.dob)
        })
    },[reset] )
    const onSubmit = (data: IFormInputs) => console.log(data);
    return (
        <div className='personalInfoEditWrapper'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="personalInfoEditHeader">
                <h4>Personal Information</h4>
                <button>Update</button>
            </div>
            <div className="personalInfoEditForm">
                <div className="formItem">
                    <label className='inputLabel' htmlFor="name">Full Name</label>
                        <input 
                            className='inputControl' 
                            type='text'
                            id='name' 
                            {...register('name')} 
                        />
                    <p className='showError' style={{color:'red'}}>{errors.name?.message}</p>
                </div>

                <div className="formItem">
                    <label className='inputLabel' htmlFor="email">Email Address</label>
                        <input 
                            className='inputControl' 
                            type='email'
                            id='email' 
                            {...register('email')}
                        />
                    </div>
                <div className="formItem">
                    <label className='inputLabel' htmlFor="phone">Phone Number</label>
                        <input 
                            className='inputControl' 
                            type='text'
                            id='phone' 
                            {...register('phone')}
                        />
                </div>
                <div className="formItem">
                    <label className='inputLabel' htmlFor="dob">Date of Birth</label>
                        <Controller
                        control={control}
                        name='dob'
                        render={({ field }) => (
                        <DatePicker
                            className='inputControl'
                            placeholderText='Select birth date'
                            onChange={(date) => field.onChange(date)}
                            selected={field.value}
                        />
                    )}
                    />
                    </div>
                </div>
            </form>
        </div>
    )
}


