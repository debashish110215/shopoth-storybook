import {FC} from 'react';
import '../../styles/myProfile/myOutletShop.scss';
import {MyOutletShopDetails} from './MyOutletShopDetails';

const  outletList = [
    { 
        outletId:125635, 
        name:'Zamal Store', 
        address:'Amborkhna Bus stand', 
        district:'Bogura', 
        ownerName:'Md. Zamal Hossain', 
        phone:'01725 569 652'
    },
    { 
        outletId:125635, 
        name:'Zamal Store', 
        address:'Amborkhna Bus stand', 
        district:'Bogura', 
        ownerName:'Md. Zamal Hossain', 
        phone:'01725 569 652'
    },
    { 
        outletId:125635, 
        name:'Zamal Store', 
        address:'Amborkhna Bus stand', 
        district:'Bogura', 
        ownerName:'Md. Zamal Hossain', 
        phone:'01725 569 652'
    },
]

const MyOutletShop:FC = () => {
    return (
        <div className='myOutletWrapper'>
            <div className="myOutletHeader">
                <h4>My Outlet Shop</h4>
                <p>Add a new</p>
            </div>
            <div className="outletDetails">
                <MyOutletShopDetails outletList={outletList}/>
            </div>
        </div>
    )
}

export default MyOutletShop
