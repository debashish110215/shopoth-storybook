import {FC, useState} from 'react'
import '../../styles/myProfile/myAddress.scss';
import {Address, Zilla, Area, Zone} from './MyProfilePage';
import AddNewAddress from './AddNewAddress'

interface MyAddressProps{
    userAddress:Array<Address>;
    zillas:Zilla[];
    areas:Area[];
    zones:Zone[];
}

export const MyAddress:FC<MyAddressProps> = ({userAddress, zillas, areas, zones}:MyAddressProps) => {
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
            zones={zones}
            areas = {areas}
            zillas = {zillas}
            address_key={addressKey}
            />
        </>
    )
}




