import {FC,useState} from 'react';
import '../../styles/myProfile/myOutletShop.scss';
import AddNewOutletSop from './AddNewOutletSop';
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
    const [showMsgPopUp, setShowMsgPopUp] = useState(false)
    const [addressKey, setAddressKey] = useState('')
    return (
        <div className='myOutletWrapper'>
            <div className="myOutletHeader">
                <h4>My Outlet Shop</h4>
                
                <button 
                    className='addNewOutlet' 
                    onClick={
                        ()=> {
                            setShowMsgPopUp(!showMsgPopUp);
                            setAddressKey('add')
                        }
                        } >
                        Add a new 
                </button>
            </div>
            <div className="outletDetails">
                <MyOutletShopDetails outletList={outletList}/>
            </div>
            <AddNewOutletSop
                showMsgPopUp={showMsgPopUp} 
                setShowMsgPopUp = {setShowMsgPopUp}
                address_key={addressKey}
            />
        </div>
    )
}

export default MyOutletShop
