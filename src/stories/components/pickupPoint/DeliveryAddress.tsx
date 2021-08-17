import React,{FC} from 'react'
import '../../styles/pickupPoints/deliveryAddress.scss';

interface DeliveryAddressProps{
    deliveryAddress:string;
    setDeliveryAddress:(address_key:string) => void
}
const DeliveryAddress:FC<DeliveryAddressProps> = ({deliveryAddress, setDeliveryAddress}) => {
    return (
        <div className='deliveryAddressWrapper'>
                <div className="deliveryAddressHeader">
                    <h2>Delivery Address</h2>
                </div>
                <div className="selectAddress">
                    <h4>Select your address</h4>
                    <div className={`homeAddress ${deliveryAddress=== 'home_address'?'selectedAddress':''}`}>
                        <input 
                            type="radio" 
                            className="formControl" 
                            id='homeAdds'
                            value='home_address'
                            checked={deliveryAddress=== 'home_address'}
                            onChange={(e)=> setDeliveryAddress(e.target.value)}
                        />
                        <label htmlFor="homeAdds" className="formlabel">
                                Home Address : 23/2, Shah Paran, Khaidm Para, Sylhet
                        </label>
                    </div>
                    <div className={`officeAddress ${deliveryAddress=== 'office_address'?'selectedAddress':''}`}>
                        <input 
                            type="radio" 
                            className="formControl" 
                            id='officeAds' 
                            value='office_address'
                            checked={deliveryAddress=== 'office_address'}
                            onChange={(e)=> setDeliveryAddress(e.target.value)}
                            />
                        <label htmlFor="officeAds" className="formlabel">
                                Office Address : 23/2, Shah Paran, Khaidm Para, Sylhet
                        </label>
                    </div>
                    <div className="addNewAddress">
                        <button>Add New Address</button>
                    </div>
                </div>
        </div>
    )
}

export default DeliveryAddress
