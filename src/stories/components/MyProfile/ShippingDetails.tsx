import {FC, useState} from 'react'
import '../../styles/myProfile/shippingDetails.scss';
import {Shipping} from './OrderDetails';
import {BsPlus} from 'react-icons/bs'
import {HiOutlineMinusSm} from 'react-icons/hi'

interface ShippingDetailsProps{
    shippingDetails:Shipping
}

const ShippingDetails:FC<ShippingDetailsProps> = ({shippingDetails}) => {
    const [showShippingDetails, setshowShippingDetails] = useState(false)

    const handleShowShippingDetails = () =>{
        setshowShippingDetails(!showShippingDetails)
    }
    return (
        <div className='shippingDetailsWrapper'>
            <div className='shippingDetailsBtn' onClick={handleShowShippingDetails}>
                <h4>Shipping Details</h4>
                <p>{showShippingDetails? <HiOutlineMinusSm size={20}/>:<BsPlus size={20}/>}</p>
            </div>
            {
                showShippingDetails && (
                        <div className="shippingDetails">
                            <p>Recipient Name : {shippingDetails.recipentName}</p>
                            <p>Phone Number : {shippingDetails.phone}</p>
                            <p>Shipping Address : &nbsp; 
                                    {shippingDetails.address.addressLine},&nbsp; 
                                    {shippingDetails.address.thana},&nbsp;  
                                    {shippingDetails.address.district},
                            </p>
                        </div>
                )
            }
        </div>
    )
}

export default ShippingDetails
