import {FC} from 'react'
import {CartButton} from '../CartButton';
import {Link, BrowserRouter as Router}  from 'react-router-dom';
import {MdCancel} from 'react-icons/md'
import {AiFillQuestionCircle, AiFillCheckCircle} from 'react-icons/ai'
import '../../styles/myProfile/notificationMsg.scss'
interface Notification{
    id:number,
    title:string;
    key:string;
    status:string;
    orderId:string;
    oderDate:string;

}
interface NotificationMsgProps{
    notificationList:Array<Notification>
}

const NotificationMsg:FC<NotificationMsgProps> = ({notificationList}:NotificationMsgProps) => {
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
                                        notification.key === 'question'?(<AiFillQuestionCircle color='#FFDD55' size={30}/>)
                                        :notification.key === 'cancel'?( <MdCancel color='#ff7789' size={30}/> )
                                        :( <AiFillCheckCircle color='#beffc0' size={30}/> )
                                    }
                                </div>
                            <div className="nftInfo">
                                <div className="nftMsgDes">
                                    <h4>{notification.title}</h4>
                                    <p>Order <span className='nftOrderId'>{notification.orderId}</span> is {notification.status === 'completed'? 'completed':'canceled'}. Your feedback matters to others! Rate the products by {notification.oderDate}.</p>
                                    <p>{notification.oderDate} 12:30</p>
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

