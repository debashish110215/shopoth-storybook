import {useState} from 'react'
import '../../styles/myProfile/myProfilePage.scss';
import Sidebar from './Sidebar';
import PersonalInfoContainer from './PersonalInfoContainer';
import YourFavourit from './YourFavourit';
import ChangePassword from './ChangePassword';
import NotificationContainer from './NotificationContainer';
import MyOrdersContainer from './MyOrdersContainer';
import {MdKeyboardArrowLeft} from 'react-icons/md'

const MyProfilePageForMobile = () => {
    const [navKey, setNavKey] = useState('')

    const selectedComponent = (navKey:string) =>{
            switch (navKey) {
                case 'account_info':
                    return  <PersonalInfoContainer />
                    break;
                case 'notification':
                    return  <NotificationContainer/>
                    break;
                case 'my_orders':
                    return  <MyOrdersContainer/>
                    break;
                case 'wishlist':
                    return  <YourFavourit />
                    break;
                case 'change_password':
                    return <ChangePassword />
                    break;
                default:
                    break;
            }
    }
    const selectedNav = (navKey:string) => {
        switch (navKey) {
            case 'account_info':
                return  'Account Information'
                break;
            case 'notification':
                return  'Notification'
                break;
            case 'my_orders':
                return  'My Orders'
                break;
            case 'wishlist':
                return  'Your Favourites'
                break;
            case 'change_password':
                return 'Change Password'
                break;
            default:
                break;
        }
    }
    return (
        <div className='myProfilePageWrapper'>
            {
                navKey?(
                    <>
                    <div className="sidebarBackBtn">
                        <button onClick={()=> setNavKey('')}>
                            <MdKeyboardArrowLeft size={30}/> 
                            <span className='backBtnText'>{selectedNav(navKey)}</span>
                        </button>
                    </div>
                    <div className="myProfileContent">
                        {selectedComponent(navKey)}
                    </div>
                    </>
                ):(
                    <div className="myProfileSidebar">
                        <Sidebar 
                            navKey={navKey}
                            setNavKey ={setNavKey}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default MyProfilePageForMobile

