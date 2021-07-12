import {FC} from 'react'
import {useForm} from 'react-hook-form'
import '../styles/subscribe.scss'

interface SubscribeProps{
    onSubscribe?:()=> void;
    show?:boolean;
}

 export const Subscribe:FC<SubscribeProps> = ({onSubscribe, show}:SubscribeProps) => {

    const {register, handleSubmit, formState:{errors}} = useForm()
    const onSubmit = handleSubmit((data) =>console.log(data))

    
    return (
        <div className='subscribe'>
            <form onSubmit={onSubmit}>
                <div className='input-email'>
                    <input type="email" {...register('email')} placeholder='Join the newsletter club'/>
                </div>
                <div className='subcribe-btn'>
                    <button type='submit'>Subscribe</button>
                </div>
            </form>
        </div>
    )
}


