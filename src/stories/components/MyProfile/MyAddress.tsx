import {FC} from 'react'
import '../../styles/myProfile/myAddress.scss';
import {Address} from './PersonalInfoContainer'

interface MyAddressProps{
    userAddress:Array<Address>
}
export const MyAddress:FC<MyAddressProps> = ({userAddress}:MyAddressProps) => {
    return (
        <div className='myAddressWrapper'>
            <div className="myAddressHeader">
                <h4>My Address</h4>
                <p>Add a new address</p>
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
    )
}




