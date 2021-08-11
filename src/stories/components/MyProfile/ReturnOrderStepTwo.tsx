import {FC, useState, useEffect} from 'react'
import '../../styles/myProfile/returnOrderStepTwo.scss';
import Dotdotdot from 'react-dotdotdot';
import {SubmitButton} from '../SubmitButton'
import ShippingDetails from './ShippingDetails';
import ImageUpload from './ImageUpload';
import {useForm, SubmitHandler} from 'react-hook-form';
import ReturnSuccessMsg from './ReturnSuccessMsg';


const returnProductDetails ={ 
    returnId:'125874',
    imgUrl:'./shopoth/images/png/p3.png', 
    productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
    quantury:2,
    amount:3500,
    currency:'Tk',
    status:'completed',
    dateTime:'12-06-21, 10.21',
    deliveryId:'1256487',
}
const shippingDetails = {
recipentName:'Md.Mizanur Rahman',
phone:'01521120115',
address:
    {
        addressName:'Home Address', 
        addressLine:'23/2, Shah Paran', 
        thana:'Kahalu', 
        district:'Bogura'
    },

}
const reasons = [
    {id:1, title:'Reason One', value:'reason_one'},
    {id:2, title:'Reason Two', value:'reason_two'},
    {id:3, title:'Reason Three', value:'reason_three'},
    {id:4, title:'Reason Four', value:'reason_four'},
    {id:5, title:'Reason Five', value:'reason_five'},
]

interface Inputs{
    return_reason:string;
    add_cmnt:string;
}
interface ReturnOrderSetpTwoProps{
    setOrderKey:(order_key:string) => void

}

const ReturnOrderSetpTwo:FC<ReturnOrderSetpTwoProps> = ({setOrderKey}) => {
        const [selectedImgFiles, setSelectedImgFiles] = useState<any[]>([])
        const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
        const [showMsgPopUp, setShowMsgPopUp] = useState(false)

        const onSubmit: SubmitHandler<Inputs> = data =>{
            console.log(data);
            setShowMsgPopUp(!showMsgPopUp)
        } 

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='returnOrderOneWrapper'>
                <div className="backStepOne">
                    <button onClick={()=>setOrderKey('return_order_one')}>Back to Step 1</button>
                </div>
                <div className="returnOrderOneHeader">
                    <h4>Return (Step 2/2)</h4>
                </div>
            <div className="returnOrderOneNum">
                    Item 1
                </div>
                    <div className="returnOrderOneItem">
                        <div className="returnOrderOneImgWrapper">
                            <img 
                                className='returnOrderOneImg' 
                                src={`${returnProductDetails.imgUrl}`} 
                                alt={`${returnProductDetails.productTitle}`} 
                            />
                        </div>
                        <div className="returnOrderOneItemDes">
                            <Dotdotdot clamp={4}>
                                <h4>{returnProductDetails.productTitle}</h4>
                            </Dotdotdot>
                            <p>Quantity: {returnProductDetails.quantury}</p>
                            <p>{returnProductDetails.currency || 'Tk '}{returnProductDetails.amount}</p>
                            <p>Delivery ID : {returnProductDetails.deliveryId}</p>
                            <p>Status: {returnProductDetails.status === 'completed'? 'Completed':''}</p>
                        </div>
                    </div>
                    <div className="returnReason">
                        <label 
                            className='returnReasonLabel' 
                            htmlFor="return_reason">
                                Reason<span style={{color:'red'}}>*</span>
                        </label>
                        <select className='returnReasonSelect' id="return_reason" {...register('return_reason')}>
                            <option value="">Select a Reason </option>
                            {
                                reasons.length > 0 &&
                                reasons.map(reason =>(
                                    <option value={reason.value} key={reason.id}>{reason.title}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="returnImageUpload">
                        <ImageUpload setSelectedImgFiles = {setSelectedImgFiles}/>
                    </div>
                    <div className="additionalCommentWrapper">
                        <label className='addCmntLabel' htmlFor="add_cmnt">Additional Comment (Optiobal)</label>
                        <textarea 
                            className='addCmntInput' 
                            id="add_cmnt" cols={30} 
                            rows={5} 
                            {...register('add_cmnt')}>
                        </textarea>
                    </div>
                    <div className="orderAddress">
                        <ShippingDetails  shippingDetails={shippingDetails}/>
                    </div>
                    <div className="returnTotal">
                        <h4>TOTAL RETURN</h4>
                        <h4>Tk 8200</h4>
                    </div>
                    <div className="nextBtn">
                        <SubmitButton label='Submit' color='cart'/>
                    </div>
            </div>
        </form>
        <div>
            <ReturnSuccessMsg showMsgPopUp = {showMsgPopUp} setShowMsgPopUp={setShowMsgPopUp}/>
        </div>
        </>
        
    )
}

export default ReturnOrderSetpTwo
