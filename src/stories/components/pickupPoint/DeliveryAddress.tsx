import React,{FC, useState} from 'react'
import '../../styles/pickupPoints/deliveryAddress.scss';
import AddNewAddress from '../MyProfile/AddNewAddress'

interface DeliveryAddressProps{
    deliveryAddress:string;
    setDeliveryAddress:(address_key:string) => void
}
const DeliveryAddress:FC<DeliveryAddressProps> = ({deliveryAddress, setDeliveryAddress}) => {
    const [showMsgPopUp, setShowMsgPopUp ] = useState(false)
    return (
        <>
        <div className='deliveryAddressWrapper'>
                <div className="deliveryAddressHeader">
                    <h2>Delivery Address</h2>
                </div>
                <div className="selectAddress">
                    <h4>Select your address</h4>
                    <div 
                        className={`homeAddress ${deliveryAddress=== 'home_address'?'selectedAddress':''}`}
                        onClick={()=> setDeliveryAddress('home_address')}
                    >
                        <input 
                            type="radio" 
                            className="formControl" 
                            id='homeAdds'
                            checked={deliveryAddress=== 'home_address'}
                        />
                        <label htmlFor="homeAdds" className="formlabel">
                                Home Address : 23/2, Shah Paran, Khaidm Para, Sylhet
                        </label>
                    </div>
                    <div 
                        className={`officeAddress ${deliveryAddress=== 'office_address'?'selectedAddress':''}`}
                        onClick={()=> setDeliveryAddress('office_address')}

                    >
                        <input 
                            type="radio" 
                            className="formControl" 
                            id='officeAds' 
                            checked={deliveryAddress=== 'office_address'}
                            />
                        <label htmlFor="officeAds" className="formlabel">
                                Office Address : 23/2, Shah Paran, Khaidm Para, Sylhet
                        </label>
                    </div>
                    <div className="addNewAddress">
                        <button onClick={() => setShowMsgPopUp(!showMsgPopUp)}>Add New Address</button>
                    </div>
                </div>
        </div>
        <AddNewAddress showMsgPopUp={showMsgPopUp} setShowMsgPopUp={setShowMsgPopUp} address_key='checkout'/>
        </>
    )
} 

export default DeliveryAddress
