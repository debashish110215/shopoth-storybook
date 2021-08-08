import {useState} from 'react'
import '../../styles/myProfile/myProfilePage.scss';
import Sidebar from './Sidebar';
import PersonalInfoContainer from './PersonalInfoContainer';
import MyOutletShop from './MyOutletShop';
import YourFavourit from './YourFavourit';
import ChangePassword from './ChangePassword';
import NotificationMsg from './NotificationMsg';
import MyOrdersContainer from './MyOrdersContainer';

const userDetails ={
    id:1,
    userId:'025462',
    userName:'Cameron Williamson',
    email : 'Sayekat Chakraborty@gmil.com',
    phone : '+880 1926 569 236',
    gender : 'Male',
    dob : '12/02/1992',
    userImgUrl:'./pro_img.png',
    accountCreationDate:'2021',
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
const  outletList = [
    { 
        outletId:125635, 
        name:'Zamal Store', 
        address:'Amborkhna Bus stand', 
        district:'Bogura', 
        ownerName:'Md. Zamal Hossain', 
        phone:'01725 569 652'
    },
    { 
        outletId:125635, 
        name:'Zamal Store', 
        address:'Amborkhna Bus stand', 
        district:'Bogura', 
        ownerName:'Md. Zamal Hossain', 
        phone:'01725 569 652'
    },
    { 
        outletId:125635, 
        name:'Zamal Store', 
        address:'Amborkhna Bus stand', 
        district:'Bogura', 
        ownerName:'Md. Zamal Hossain', 
        phone:'01725 569 652'
    },
]
const favouriteProductList = [
    { 
        id:1,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        price:3500 
    },
    {   id:2,
        imgUrl:'./shopoth/images/png/download.png', 
        productTitle:'Asus RT-AC1200 V2 Dual-Band Wifi Wireless Router', 
        price:3500 
    },
    {   id:3,
        imgUrl:'./shopoth/images/png/G03.jpg', 
        productTitle:'Body Lotion for Dry Skin', 
        price:3500 
    },
]
const userAddress = [
    {addressName:'Home Address', addressLine:'23/2, Shah Paran', thana:'Kahalu', district:'Bogura'},
    {addressName:'Office Address', addressLine:'23/2, Shah Paran', thana:'Kahalu', district:'Bogura'}
]
const  notificationList = [
    { 
        id:1,
        title:'Did you enjoy your shopping experience?',
        key:'question',
        status:'completed',
        orderId:'2015MXQ62',
        oderDate:'20/07/2021'
    },
    { 
        id:2,
        title:'Cancellation Request Accepted',
        key:'cancel',
        status:'canceled',
        orderId:'2015MXQ62',
        oderDate:'20/07/2021'
    },
    { 
        id:3,
        title:'Confirm Recipet',
        key:'confirm',
        status:'completed',
        orderId:'2015MXQ62',
        oderDate:'20/07/2021'
    },
]
const orderList = [
    { 
        id:1,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:'125874',
        amount:3500,
        status:'in_progress',
        dateTime:'12-06-21, 10.21'
    },
    { 
        id:2,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:'125874',
        amount:3500,
        status:'completed',
        dateTime:'12-06-21, 10.21',
        returnDate:'30-07-21'
    },
    { 
        id:3,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:'125874',
        amount:3500,
        status:'in_progress',
        dateTime:'12-06-21, 10.21'
    },
    { 
        id:4,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:'125874',
        amount:3500,
        status:'in_progress',
        dateTime:'12-06-21, 10.21'
    },
    { 
        id:5,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:'125874',
        amount:3500,
        status:'cancelled',
        dateTime:'12-06-21, 10.21'
    },
    { 
        id:6,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:'125874',
        amount:3500,
        status:'cancelled',
        dateTime:'12-06-21, 10.21',
        returnDate:'30-07-21'
    },
    { 
        id:7,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:'125874',
        amount:3500,
        status:'return',
        dateTime:'12-06-21, 10.21'
    },
    { 
        id:8,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:'125874',
        amount:3500,
        status:'past_purchase',
        dateTime:'12-06-21, 10.21'
    },
    { 
        id:9,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:'125874',
        amount:3500,
        status:'return',
        dateTime:'12-06-21, 10.21'
    },
    { 
        id:10,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:'125874',
        amount:3500,
        status:'past_purchase',
        dateTime:'12-06-21, 10.21'
    },
]


export interface User{
    id:number;
    userId:string;
    userName:string;
    email:string;
    phone:string;
    gender:string;
    dob:string;
    userImgUrl:string;
    accountCreationDate:string;
}
export interface Address{
    addressName:string;
    addressLine:string;
    area?:string;
    zone?:string;
    thana:string;
    district:string;
}
export interface Zilla {
    id:number;
    title:string;
    value:string;
}
export interface Area {
    id:number;
    title:string;
    value:string;
}
export interface Zone {
    id:number;
    title:string;
    value:string;
}
export interface Outlet{
    outletId:number;
    name:string;
    ownerName:string;
    phone:string;
    address:string;
    district:string;
    
}
export interface Favourite{
    id:number;
    imgUrl:string;
    productTitle:string;
    price:number;
    currency?:string;
}
export interface Notification{
    id:number,
    title:string;
    key:string;
    status:string;
    orderId:string;
    oderDate:string;
}
export interface Order{
    id:number;
    imgUrl:string;
    productTitle:string;
    orderId:string;
    amount:number;
    status:string;
    dateTime:string;
    returnDate?:string;
    currency?:string;
    deliveryID?:string;

}


const MyProfilePage = () => {
    const [navKey, setNavKey] = useState('account_info')
    const onAddToCart = () =>{

    }
    return (
        <div className='myProfilePageWrapper'>
            <div className="myProfileSidebar">
                <Sidebar 
                    userDetails={userDetails}
                    navKey={navKey}
                    setNavKey ={setNavKey}
                />
            </div>
            <div className="myProfileContent">
                {
                    navKey === 'account_info'?
                    (
                        <>
                            <div className="userInfo">
                                <PersonalInfoContainer
                                    userDetails={userDetails}
                                    userAddress ={userAddress}   
                                    zones={zones}
                                    areas = {areas}
                                    zillas = {zillas}
                                />
                            </div>
                            <div className="outlet">
                                <MyOutletShop outletList={outletList}/>
                            </div>
                        </>
                    ):
                    navKey === 'notification'?
                    (
                        <div className="notificationMsg">
                            <NotificationMsg notificationList={notificationList}/>
                        </div> 
                    ):
                    navKey === 'my_orders'?
                    (
                        <div className="myOrders">
                            <MyOrdersContainer orderList={orderList}/>
                        </div>
                    ):
                    navKey === 'wishlist'?
                    (
                        <div className="ourFavourite">
                            <YourFavourit 
                                favouriteProductList={favouriteProductList}
                                onAddToCart={onAddToCart}
                            />
                        </div> 
                    ):
                    navKey === 'change_password'?
                    (
                        <div className="changePassword">
                            <ChangePassword/>
                        </div> 
                    ):''
                }
            </div>
        </div>
    )
}

export default MyProfilePage
