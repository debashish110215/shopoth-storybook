import {FC} from 'react'
import '../../styles/myProfile/returnOrderStepOne.scss';
import Dotdotdot from 'react-dotdotdot';
import {SubmitButton} from '../SubmitButton'
import { string } from 'yup';

const returnOrderDetails = {
    orderId:'125874',
    orderedProductList:[
        { 
            id:1,
            imgUrl:'./shopoth/images/png/p3.png', 
            productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
            quantury:2,
            amount:3500,
            currency:string,
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
            currency:string,
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
            currency:string,
            status:'completed',
            dateTime:'12-06-21, 10.21',
            deliveryId:'1256487',
        },
        
    ],

};





const ReturnOrderStepOne = ({

    }) => {
    return (
        <div className='returnOrderOneWrapper'>
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
