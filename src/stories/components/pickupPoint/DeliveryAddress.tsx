import React,{FC, useState} from 'react'
import '../../styles/pickupPoints/deliveryAddress.scss';
import AddNewAddress from '../MyProfile/AddNewAddress'

const addresses = [
    {id:1, address_name:'Home Address',address_key:'home_address', address_line:'23/2, Shan Paran', zilla:'Sylhet', area:'Khaidm Para', zone:'zone1' },
    {id:2, address_name:'Office Address',address_key:'office_address', address_line:'23/2, Shan Paran', zilla:'Sylhet', area:'Khaidm Para', zone:'zone2' },
]
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
                    {
                        addresses.map(address =>(
                            <div 
                            className={`address ${deliveryAddress=== address.address_key?'selectedAddress':''}`}
                            onClick={()=> setDeliveryAddress( address.address_key)}
                            key={address.id}
                        >
                            <label className="radioContainer">
                                    <input type="radio" className="formControl" 
                                        id={address.address_key}
                                        checked={deliveryAddress=== address.address_key}/>
                                    <span className="checkmark"></span>
                                    <span className='labelTxt'> {address.address_name} : {address.address_line}, {address.area}, {address.zilla}</span>
                                    
                                </label>
                        </div>
                        
                        ))
                    }
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
