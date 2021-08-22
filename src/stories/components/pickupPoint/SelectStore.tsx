import {FC} from 'react';
import '../../styles/pickupPoints/selectStore.scss';

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

const SelectStore= () => {    
    return (
        <div className='selectStoreWrapper'>
            {
                outletList?.map( (outlet, index)=>(
                    <div className="selectStore" key={index}>
                        <div className="storeInfo">
                            <div className="selectRadio">
                                <input type="radio" />
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

