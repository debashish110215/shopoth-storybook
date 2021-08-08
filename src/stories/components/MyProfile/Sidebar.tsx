import {FC} from 'react';
import {SidebarTop} from './SidebarTop';
import {SidebarNav} from './SidebarNav';
import '../../styles/myProfile/sidebar.scss'
import {User} from './MyProfilePage'

interface SidebarProps{
    userDetails:User;
    navKey:string;
    setNavKey:(nav_key:string)=>void;
    
}

const Sidebar:FC<SidebarProps> = ({userDetails,navKey, setNavKey}) => {
    return (
        <div className='profileSidebarWrapper'>
            <div className="profileSidebarTop">
                <SidebarTop 
                    userName={userDetails.userName} 
                    userId={userDetails.userId} 
                    userImgUrl={userDetails.userImgUrl}
                    accountCreationDate={userDetails.accountCreationDate}
                />
            </div>
            <div className="profileSidebarNav">
                <SidebarNav id={userDetails.id}     
                            navKey={navKey} 
                            setNavKey={setNavKey}
                        />
            </div>
        </div>
    )
}

export default Sidebar
