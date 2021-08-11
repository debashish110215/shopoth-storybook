import {FC} from 'react'
import '../../styles/myProfile/returnOrderStepOne.scss';
import Dotdotdot from 'react-dotdotdot';
import {SubmitButton} from '../SubmitButton';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



const returnOrderDetails = {
    orderId:'125874',
    orderedProductList:[
        { 
            id:1,
            imgUrl:'./shopoth/images/png/p3.png', 
            productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
            quantury:2,
            amount:3500,
            currency:'Tk',
            status:'completed',
            dateTime:'12-06-21, 10.21',
            deliveryId:'1256487',
        },
        { 
            id:2,
            imgUrl:'./shopoth/images/png/download.png', 
            productTitle:'Asus RT-AC1200 V2 Dual-Band Wifi Wireless Router', 
            quantury:1,
            amount:3500,
            currency:'Tk',
            status:'completed',
            dateTime:'12-06-21, 10.21',
            deliveryId:'1256487',
        },
        { 
            id:3,
            imgUrl:'./shopoth/images/png/G03.jpg', 
            productTitle:'Body Lotion for Dry Skin', 
            quantury:5,
            amount:3500,
            currency:'Tk',
            status:'completed',
            dateTime:'12-06-21, 10.21',
            deliveryId:'1256487',
        },
        
    ],

};

interface IFormInputs {
    product_id: number
}
// const schema = yup.object().shape({
//     product_id: yup.number().required(),
// });

interface ReturnOrderStepOneProps{
    setSelectedOrderId:(id:number) => void;
    setOrderKey:(order_key:string) => void

}

const ReturnOrderStepOne:FC<ReturnOrderStepOneProps> = ({
    setSelectedOrderId, 
    setOrderKey
}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        // resolver: yupResolver(schema)
        });

    const onSubmit = (data: IFormInputs) =>{
        console.log('data',data);
        setOrderKey('return_order_two')
    } 

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='returnOrderOneWrapper'>
                <div className="backMyOrders">
                    <button onClick={()=>setSelectedOrderId(0)}>Back to OrderList</button>
                </div>
                <div className="returnOrderOneHeader">
                    <h4>Return (Step 1/2)</h4>
                </div>
                <div className="returnOrderOneNum">
                        Order Number #{returnOrderDetails.orderId}
                    </div>
                {
                    returnOrderDetails.orderedProductList.length > 0 &&
                    returnOrderDetails.orderedProductList.map(item =>(
                        <div className="returnOrderOneItem" key={item.id}>
                            <div className="returnOrderOneSelectRadio">
                                <label className="radioContainer">
                                    <input type="radio" {...register('product_id')} value={item.id}/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="returnOrderOneImgWrapper">
                                <img className='returnOrderOneImg' src={`${item.imgUrl}`} alt={`${item.productTitle}`} />
                            </div>
                            <div className="returnOrderOneItemDes">
                                <Dotdotdot clamp={4}>
                                    <h4>{item.productTitle}</h4>
                                </Dotdotdot>
                                <p>Quantity: {item.quantury}</p>
                                <p>{item.currency || 'Tk '}{item.amount}</p>
                                <p>Delivery ID : {item.deliveryId}</p>
                                <p>Status: {item.status === 'completed'? 'Completed':''}</p>
                            </div>
                        </div>
                    ))
                }
                <div className="returnTotal">
                    <h4>TOTAL RETURN</h4>
                    <h4>Tk 8200</h4>
                </div>
                <div className="nextBtn">
                    <SubmitButton label='Next' color='cart'/>
                </div>
            </div>
    </form>

    )
}

export default ReturnOrderStepOne
