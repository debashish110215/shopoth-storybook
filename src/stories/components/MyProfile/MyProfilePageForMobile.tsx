import {useState} from 'react'
import '../../styles/myProfile/myProfilePage.scss';
import Sidebar from './Sidebar';
import PersonalInfoContainer from './PersonalInfoContainer';
import YourFavourit from './YourFavourit';
import ChangePassword from './ChangePassword';
import NotificationContainer from './NotificationContainer';
import MyOrdersContainer from './MyOrdersContainer';

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
    return (
        <div className='myProfilePageWrapper'>
            {
                navKey?(
                    <>
                    <div className="sidebarBackBtn">
                        <button onClick={()=> setNavKey('')}> Back to Sidebar</button>
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

