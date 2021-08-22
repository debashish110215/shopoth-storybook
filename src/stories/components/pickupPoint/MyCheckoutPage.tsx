import React from 'react';
import Pickup from './Pickup';
import Voucher from './Voucher';
import YourOrders from './YourOrders';
import '../../styles/pickupPoints/myCheckoutPage.scss';


const MyCheckoutPage = () => {
    return (
        <div className='myCheckoutPageWrapper'>
            <div className="pickupSection">
                <Pickup/>
            </div>
            <div className="yourOrdersSection">
                <div className="yourOrders">
                    <YourOrders/>
                </div>
                <div className="voucher">
                    <Voucher/>
                </div>
            </div>
        </div>
    )
}

export default MyCheckoutPage
