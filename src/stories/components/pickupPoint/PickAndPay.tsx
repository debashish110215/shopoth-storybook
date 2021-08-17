import React from 'react'
import SearchStore from './SearchStore';
import SelectStore from './SelectStore';
import '../../styles/pickupPoints/pickAndPay.scss';


const PickAndPay = () => {
    return (
        <div className='pickAndPlayWrapper'>
            <div className="pickAndPlayHeader">
                <h2>Delivery Address</h2>
            </div>
            <div className="searchStore">
                <SearchStore/>
            </div>
            <div className="selectStore">
                <SelectStore/>
            </div>
        </div>
    )
}

export default PickAndPay
