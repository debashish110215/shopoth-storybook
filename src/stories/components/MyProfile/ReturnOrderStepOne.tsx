import {FC} from 'react'
import '../../styles/myProfile/returnOrderStepOne.scss';
import Dotdotdot from 'react-dotdotdot';
import {SubmitButton} from '../SubmitButton'


export interface OrderedProduct{
    id:number;
    imgUrl:string;
    productTitle:string;
    quantury:number;
    amount:number;
    status:string;
    dateTime:string;
    currency?:string;
    deliveryId?:string;

}


interface ReturnOrderStepOneProps{
    orderId:string;
    orderedProductList:Array<OrderedProduct>;
}

const ReturnOrderStepOne:FC<ReturnOrderStepOneProps> = ({
    orderId, 
    orderedProductList, 
    }) => {
    return (
        <div className='returnOrderOneWrapper'>
            <div className="returnOrderOneHeader">
                <h4>Return (Step 1/2)</h4>
            </div>
            <div className="returnOrderOneNum">
                    Order Number #{orderId}
                </div>
            {
                orderedProductList.length > 0 &&
                orderedProductList.map(item =>(
                    <div className="returnOrderOneItem" key={item.id}>
                        <div className="returnOrderOneSelectRadio">
                            <label className="radioContainer">
                                <input type="radio"  name="radio"/>
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
    )
}

export default ReturnOrderStepOne
