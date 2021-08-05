import {FC} from 'react'
import '../../styles/myProfile/returnOrderStepTwo.scss';
import Dotdotdot from 'react-dotdotdot';
import {SubmitButton} from '../SubmitButton'
import {Address} from './PersonalInfoContainer';
import ShippingDetails from './ShippingDetails';
import ImageUpload from './ImageUpload';


export interface returnProduct{
    returnId:string;
    imgUrl:string;
    productTitle:string;
    quantury:number;
    amount:number;
    status:string;
    dateTime:string;
    currency?:string;
    deliveryId?:string;

}
export interface Shipping{
    recipentName:string;
    phone:string;
    address:Address;

}


interface ReturnOrderSetpTwoProps{
    returnProductDetails:returnProduct;
    shippingDetails:Shipping;
}
const reasons = [
    {id:1, title:'Reason One', value:'reason_one'},
    {id:2, title:'Reason Two', value:'reason_two'},
    {id:3, title:'Reason Three', value:'reason_three'},
    {id:4, title:'Reason Four', value:'reason_four'},
    {id:5, title:'Reason Five', value:'reason_five'},
]

const ReturnOrderSetpTwo:FC<ReturnOrderSetpTwoProps> = ({
    returnProductDetails, 
    shippingDetails
    }) => {
    return (
        <div className='returnOrderOneWrapper'>
            <div className="returnOrderOneHeader">
                <h4>Return (Step 2/2)</h4>
            </div>
            <div className="returnOrderOneNum">
                    Item 1
                </div>
                    <div className="returnOrderOneItem">
                        <div className="returnOrderOneSelectRadio">
                                <label className="radioContainer">
                                    <input type="radio"  name="radio"/>
                                    <span className="checkmark"></span>
                                </label>
                        </div>
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
                        <label className='returnReasonLabel' htmlFor="return_reason">Reason</label>
                        <select className='returnReasonSelect' name="return_reason" id="return_reason">
                            <option value="">Select a Reason</option>
                            {
                                reasons.length > 0 &&
                                reasons.map(reason =>(
                                    <option value={reason.value} key={reason.id}>{reason.title}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="returnImageUpload">
                        <ImageUpload/>
                    </div>
                    <div className="additionalCommentWrapper">
                        <label className='addCmntLabel' htmlFor="add_cmnt">Additional Comment</label>
                        <textarea className='addCmntInput' name="add_cmnt" id="add_cmnt" cols={30} rows={5}></textarea>
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
    )
}

export default ReturnOrderSetpTwo
