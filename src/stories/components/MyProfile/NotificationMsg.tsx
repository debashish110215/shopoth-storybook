import {FC} from 'react'
import {CartButton} from '../CartButton';
import {Link, BrowserRouter as Router}  from 'react-router-dom';
import {IoIosCloseCircle} from 'react-icons/io'
import {AiFillQuestionCircle, AiFillCheckCircle} from 'react-icons/ai'
import '../../styles/myProfile/notificationMsg.scss'
import {Notification} from './MyProfilePage'
interface NotificationMsgProps{
    notificationList:Array<Notification>
}

const NotificationMsg:FC<NotificationMsgProps> = ({
    notificationList
}) => {
    return (
        <Router>
            <div className='nftMsgWrapper'>
                <div className="nftHeader">
                    <h4>Notifications</h4>
                </div>
                {
                    notificationList.length > 0 &&
                    notificationList.map(notification =>(
                        <div className="nftItem" key={notification.id}>
                                <div className="nftIcon">
                                    {
                                        notification.key === 'question'?(<AiFillQuestionCircle color='#ffe788' size={30}/>)
                                        :notification.key === 'cancel'?( <IoIosCloseCircle color='#ffbec7' size={32}/> )
                                        :( <AiFillCheckCircle color='#beffc0' size={30}/> )
                                    }
                                </div>
                            <div className="nftInfo">
                                <div className="nftMsgDes">
                                    <h4>{notification.title}</h4>
                                    <p>Order <span className='nftOrderId'>{notification.orderId}</span> is {notification.status === 'completed'? 'completed':'canceled'}. Your feedback matters to others! Rate the products by {notification.oderDate}.</p>
                                    <p className='nftDateTime'>{notification.oderDate} 12:30</p>
                                </div>
                                <div className="nftAction">
                                    <Link to='/' className="nftorderDetails">
                                        <CartButton label='Order Details' color='cart' />
                                    </Link>
                                    <Link to='/' className="nftBuyAgain">
                                        <CartButton label='Buy Again' outline={true} color='cart'/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Router>
    )
}

export default NotificationMsg

