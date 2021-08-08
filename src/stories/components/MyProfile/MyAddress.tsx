import {FC, useState} from 'react'
import '../../styles/myProfile/myAddress.scss';
import {Address} from './PersonalInfoContainer';
import AddNewAddress from './AddNewAddress'

interface MyAddressProps{
    userAddress:Array<Address>
}
const zillas = [
    {id:1, title:'Bogura', value:'bogura'},
    {id:2, title:'Rajshahi', value:'rajshahi'},
    {id:3, title:'Dhaka', value:'dhaka'},
    {id:4, title:'Pabna', value:'pabna'},
    {id:5, title:'Sirajgonj', value:'sirajgonj'},
]
const areas = [
    {id:1, title:'Area 1', value:'area1'},
    {id:2, title:'Area 2', value:'area2'},
    {id:3, title:'Area 3', value:'area3'},
    {id:4, title:'Area 4', value:'area4'},
    {id:5, title:'Area 5', value:'area5'},
]
const zones = [
    {id:1, title:'Zone 1', value:'zone1'},
    {id:2, title:'Zone 2', value:'zone2'},
    {id:3, title:'Zone 3', value:'zone3'},
    {id:4, title:'Zone 4', value:'zone4'},
    {id:5, title:'Zone 5', value:'zone5'},
]
export const MyAddress:FC<MyAddressProps> = ({userAddress}:MyAddressProps) => {
    const [showMsgPopUp, setShowMsgPopUp] = useState(false)
    return (
        <>
            <div className='myAddressWrapper'>
            <div className="myAddressHeader">
                <h4>My Address</h4>
                <button className='addNewAddress' onClick={()=> setShowMsgPopUp(!showMsgPopUp)} >Add a new address</button>
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
                                Edit
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
            />
        </>
    )
}




