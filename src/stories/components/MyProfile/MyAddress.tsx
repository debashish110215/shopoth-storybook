import {FC, useState} from 'react'
import '../../styles/myProfile/myAddress.scss';
import AddNewAddress from './AddNewAddress'

const userAddress = [
    {addressName:'Home Address', addressLine:'23/2, Shah Paran', thana:'Kahalu', district:'Bogura'},
    {addressName:'Office Address', addressLine:'23/2, Shah Paran', thana:'Kahalu', district:'Bogura'}
]

export const MyAddress:FC = () => {
    const [showMsgPopUp, setShowMsgPopUp] = useState(false)
    const [addressKey, setAddressKey] = useState('')
    return (
        <>
            <div className='myAddressWrapper'>
            <div className="myAddressHeader">
                <h4>My Address</h4>
                <button 
                    className='addNewAddress' 
                    onClick={
                        ()=> {
                            setShowMsgPopUp(!showMsgPopUp);
                            setAddressKey('add')
                        }
                        } >
                        Add a new address
                </button>
            </div>
            <div className="myAddress">
                {
                    userAddress.length > 0 &&
                    userAddress.map((address, index)=>(
                        <div className="myAddressItem" key={index}>
                            <div className="addressTxt">
                                <address>{address.addressName} : {address.addressLine}, {address.thana}, {address.district} </address>
                            </div>
                            <div className="addressEdit">
                                <button 
                                    className='editNewAddress' 
                                    onClick={
                                        ()=> {
                                            setShowMsgPopUp(!showMsgPopUp);
                                            setAddressKey('edit')
                                        }
                                        } 
                                >
                                    Edit
                                </button>
                            </div>
                    </div>
                    ))
                }
            </div>
        </div>
        <AddNewAddress 
            showMsgPopUp={showMsgPopUp} 
            setShowMsgPopUp = {setShowMsgPopUp}
            address_key={addressKey}
            />
        </>
    )
}




