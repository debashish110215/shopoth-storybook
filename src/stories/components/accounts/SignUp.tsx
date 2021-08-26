import {FC, useState, forwardRef} from 'react'
import {useForm, Controller} from 'react-hook-form'
import {SubmitButton} from '../SubmitButton'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import '../../styles/accounts/signUp.scss';
import DatePicker from "react-datepicker";
import {GoCalendar} from 'react-icons/go'
import "react-datepicker/dist/react-datepicker.css";

interface IFormInputs {
    full_name: string;
    phone: string;
    email: string;
    dob: Date;
    gender:string;
    password:string;
    email_me:boolean;
}

const schema = yup.object().shape({

    full_name: yup.string()
                .required('Full Name is required')
                .matches(/^[a-zA-Z]+(\.?)(\s[a-zA-Z]+(\.?))*$/, "No special characters and numbers are allowed"),
    phone: yup.string()
            .required('Phone is required') 
            .matches(/(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/, "Please provide valid BD phone number"),
    email: yup.string()
            .required('Email is required').email("Please provide valid email"),
    dob: yup.string().required('Date of Birth is required'),
    gender: yup.string().required(' Please select gender'),
    password: yup.string()
            .required(' Password is required')
            .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,"At least one number and one uppercase and lowercase letter, and more than 8 characters"),
    email_me: yup.string().required('Check email me to continue'),

});


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
  
    const { register, handleSubmit, formState: { errors }, control } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
        defaultValues:{
            gender:'male'
        }
    });



    const CustomInput = forwardRef<any>(({onClick, value, placeholder}:any, ref) => {
        return (
          <div className='customDatePicker'>
            <label onClick={onClick} ref={ref} className='customDatePickerValue'>
              {value || placeholder}
            </label>
            <GoCalendar  className='datePickerIcon' onClick={onClick} />
          </div>
        );
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="siginUpForm">
                    <div className="fullName">
                        <input 
                            type="text" 
                            className='inputControl' 
                            placeholder='Full Name' 
                            {...register('full_name')}
                        />
                        <p className='errorMsg'>{errors.full_name?.message}</p>
                    </div>
                    <div className="phone">
                        <input 
                            type="text" 
                            className='inputControl' 
                            placeholder='Phone Number' 
                            {...register('phone')} 
                        />
                        <p className='errorMsg'>{errors.phone?.message}</p>
                    </div> 
                    <div className="email">
                        <input 
                            type="email" 
                            className='inputControl' 
                            placeholder='Email Address' 
                            {...register('email')} 
                            autoComplete="new-email"
                            autoCorrect="off" 
                        />
                        <p className='errorMsg'>{errors.email?.message}</p>
                    </div>
                    <div className="genderContainer">
                        <div className="gender">
                            <div className="male">
                                <label className="radioContainer " htmlFor="male">
                                    <input type="radio" className="formControl" 
                                        id='male'
                                        value='male'
                                        {...register('gender')}
                                    />
                                    <span className="checkmark smallRadio"></span>
                                    <span className='labelTxt'> Male</span>  
                                </label>
                            </div>
                        
                            <div className="female">
                                <label className="radioContainer " htmlFor="female">
                                    <input type="radio" className="formControl" 
                                        id='female'
                                        value='female'
                                        {...register('gender')}
                                    />
                                    <span className="checkmark smallRadio"></span>
                                    <span className='labelTxt'> Female</span>  
                                </label>
                            </div>
                            <div className="others">
                                <label className="radioContainer " htmlFor="others">
                                    <input type="radio" className="formControl" 
                                        id='others'
                                        value='others'
                                        {...register('gender')}
                                    />
                                    <span className="checkmark smallRadio"></span>
                                    <span className='labelTxt'> Others</span>  
                                </label>
                            </div>
                        </div>
                        <p className='errorMsg genderError'>{errors.gender?.message}</p>
                    </div>
                   
                    {/* <div className="dobContainer">
                    <div className="dob">
                        <Controller
                            control={control}
                            name='dob'
                            render={({ field}) => (
                            <DatePicker
                                className="dateControl"
                                placeholderText='Select birth date'
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                                customInput={<CustomInput />}
                            />
                             )}
                        />
                       
                    </div>
                    <p className='errorMsg'>{errors.dob?.message}</p>
                    </div> */}






                    <div className="dobContainer">
                    <div className="dob">
                        <Controller
                            control={control}
                            name='dob'
                            render={({ field}) => (
                            <DatePicker
                                className="dateControl"
                                placeholderText='Select birth date'
                                onChange={(date) => field.onChange(date)}
                                selected={field.value}
                                customInput={<CustomInput />}
                            />
                             )}
                        />
                       
                    </div>
                    <p className='errorMsg'>{errors.dob?.message}</p>
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
                   
                </div>
            
                <div className="emailMe">
                <label className="checkContainer">
                    <input type="checkbox" id='emailMe' {...register('email_me')} />
                    <span className="checkmark "></span>
                </label>
                    <p>Email me about special pricing.hot new items, gift ideas and more </p>
                    <p className='errorMsg'>{errors.email_me?.message}</p>
                </div>

                <div className="privacyPolicy">
                    <p>
                        By clicking Create Account, you acknowledge you have read and agreed to our
                         <span className='terms'> Terms of Use </span> 
                         and  <span className='terms'> Privacy Policy</span>
                    </p>
                </div>
                <div className="signUpBtn">
                    <SubmitButton label='Create Account' color='cart'/>
                    <p>Do you have an account? <span className='signIn'>Sign In</span> </p>
                </div>
            </form>
          
        </div>
    
    )
}

export default SignUp
