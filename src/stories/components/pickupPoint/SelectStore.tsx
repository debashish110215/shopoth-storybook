import {FC} from 'react';
import '../../styles/pickupPoints/selectStore.scss';

const  outletList = [
    { 
        outletId:'12345', 
        name:'Zamal Store', 
        address:'Amborkhna Bus stand', 
        district:'Bogura', 
        ownerName:'Md. Zamal Hossain', 
        phone:'01725 569 652'
    },
    { 
        outletId:'85365', 
        name:'Sadia Store', 
        address:'Amborkhna Bus stand', 
        district:'Bogura', 
        ownerName:'Md. Zamal Hossain', 
        phone:'01725 569 652'
    },
    { 
        outletId:'85432', 
        name:'Hasan Store', 
        address:'Amborkhna Bus stand', 
        district:'Bogura', 
        ownerName:'Md. Zamal Hossain', 
        phone:'01725 569 652'
    },
]
interface SelectStoreProps {
    storeId:string;
    setStoreId:(storeId:string) => void
}

const SelectStore:FC<SelectStoreProps>= ({storeId, setStoreId}) => {    
    return (
        <div className='selectStoreWrapper'>
            {
                outletList?.map( (outlet, index)=>(
                    <div className={`selectStore ${storeId === outlet.outletId?'selectedStore':''}`} key={index} onClick={() => setStoreId(outlet.outletId)}>
                        <div className="storeInfo">
                            <div className="selectRadio" >
                                <label className="radioContainer">
                                    <input type="radio" className="formControl" 
                                        id={outlet.name}
                                        name='store'
                                        checked={storeId === outlet.outletId}/>
                                    <span className="checkmark"></span>                                    
                                </label>
                            </div>
                            <div className="storeDetails">
                                <p> {outlet.name}</p>
                                <p>Store #0{outlet.outletId}</p>
                                <address>{outlet.address}, </address>
                                <address>{outlet.district}</address>
                            </div>
                            
                        </div>
                        <div className="ownerInfo">
                            <p>
                                <img  className='imageIcon' src="./shopoth/icon/Person.svg" alt="owner" />
                                <span className='owner'>{outlet.ownerName}</span>
                            </p>
                            <p> 
                                <img className='imageIcon' src="./shopoth/icon/Frame.svg" alt="phone" />
                                <span className='owner'>{outlet.phone}</span>
                                
                                </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SelectStore

