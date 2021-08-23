import React, {FC} from 'react'
import SearchStore from './SearchStore';
import SelectStore from './SelectStore';
import '../../styles/pickupPoints/pickAndPay.scss';

interface PickAndPayProps {
    storeId:string;
    setStoreId:(storeId:string) => void
}
const PickAndPay:FC<PickAndPayProps> = ({storeId, setStoreId}) => {
    return (
        <div className='pickAndPlayWrapper'>
            <div className="pickAndPlayHeader">
                <h2>Delivery Address</h2>
            </div>
            <div className="searchStore">
                <SearchStore/>
            </div>
            <div className="selectStore">
                <SelectStore storeId={storeId} setStoreId={setStoreId}/>
            </div>
        </div>
    )
}

export default PickAndPay
