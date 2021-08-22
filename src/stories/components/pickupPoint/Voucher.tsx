import React , {useState} from 'react'
import '../../styles/pickupPoints/voucher.scss';
import {CartButton} from '../CartButton'

const Voucher = () => {
    const [selectedVoucher, setSelectedVoucher] = useState('discount') 
    const handleOkBtn = () =>{
        
    }
    return (
        <div className='voucherWrapper'>
            <div className="enterCodeContainer">
                <h4>Select your Vouchar or enter code</h4>
                <div className="enterCode">
                    <input type="text"  className='inputControl' placeholder='Enter code here'/>
                    <button className='applyBtn'>Apply</button>
                </div>
            </div>
            <div className="selectVoucher">
                <h4>Select Vouchar</h4>
                <div className="discount" onClick={() => setSelectedVoucher('discount')}>
                    <div className="discountImg">
                        <h4>10% Discount</h4>
                    </div>
                    <div className={`discountText ${ selectedVoucher === 'discount'? 'selectedVoucher':''}`}>
                        <h4>10% Discount on Total Price</h4>
                        <button>No Max Limit</button>
                        <button>10% Cashback Sellers</button>
                        <p>Valid till: 01-Aug-2021</p>

                    </div>
                </div>
                <div className="freeShipping" onClick={() => setSelectedVoucher('free_shipping')}>
                    <div className="shippingImg">
                        <h4> <span className='free'> Free </span> Shipping</h4>
                    </div>
                    <div className={`shippingText ${ selectedVoucher === 'free_shipping'? 'selectedVoucher':''}`}>
                        <h4>FREE Shipping</h4>
                        <button>No Max Limit</button>
                        <p>Valid till: 01-Aug-2021</p>
                    </div> 
                </div>
            </div>

            <div className="okBtn">
                <CartButton label='OK' color='cart' onClick={handleOkBtn}/>
            </div>
        </div>
    )
}

export default Voucher
