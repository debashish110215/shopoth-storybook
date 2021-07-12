import {FC, useState} from 'react'
import {FiPhone} from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'
import '../styles/footerShopothInfo.scss'

interface FooterShopothInfoProps{
    brandList?:string[]
}

export const FooterShopothInfo:FC<FooterShopothInfoProps> = ({brandList}:FooterShopothInfoProps) => {
    const [footerContent] = useState({
        shopoth_info:{
            logo:'./icons/shopoth.svg',
            phone:'01723 456 789',
            email:'shopoth@gmail.com'
        },
        about_us:[
            {title:'About Us', link:'#'},
            {title:'About Us', link:'#'},
            {title:'About Us', link:'#'},
            {title:'About Us', link:'#'},
        ],
        contact_us:{
            address:'Level-8, SKS Tower, 7 <br/> VIP Road, Dhaka 1206'
        },
        payment_channel:[
            {icon:'./icons/visa.png', link:'#'},
            {icon:'./icons/visa.png', link:'#'},
            {icon:'./icons/visa.png', link:'#'},
            {icon:'./icons/visa.png', link:'#'},
            {icon:'./icons/visa.png', link:'#'},
            {icon:'./icons/visa.png', link:'#'}
        ]
    })
    return (
        <div className="footer-info-wrapper-outer">
                <div className='footer-info-container'>
                    <div className="shopoth-info">
                        <div>
                            <img src="./icons/shopoth.svg" alt="shopoth" />
                        </div>
                        <ul>
                            <li><a href="#"><FiPhone/>  01723 456 789</a></li>
                            <li><a href="#"> <AiOutlineMail/> shopoth@gmail.com</a></li>
                        </ul>
                    </div>

                    <div className="about-us">
                        <h4>About Us</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy & Policy</a></li>
                            <li><a href="#">Return & Refund Policy</a></li>
                        </ul>
                    </div>
                    <div className="contact-us">
                        <h4> Contact Us</h4>
                        <address>
                            <pre>   
                                    Level-8, SKS Tower, 7 <br/>
                                    VIP Road, Dhaka 1206 
                            </pre>
                        </address>
                    
                    </div>
                    <div className="payment-channel">
                        <h4>Our Payment Channel</h4>
                        <ul>
                            <li><a href="#"><img src="./icons/visa.png" alt="visa" /></a></li>
                            <li><a href="#"><img src="./icons/master.svg" alt="master" /></a></li>
                            <li><a href="#"><img src="./icons/bikash.svg" alt="bikash" /></a></li>
                        </ul>
                        <ul>
                            <li><a href="#"><img src="./icons/nagad.svg" alt="nagad" /></a></li>
                            <li><a href="#"><img src="./icons/rocket.svg" alt="rocket" /></a></li>
                            <li><a href="#"><img src="./icons/dbbl.png" alt="dbbl" /></a></li>
                        </ul>
                    </div>
            </div>
        </div>
       
    )
}

