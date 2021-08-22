import {FC} from 'react';
import {SidebarTop} from './SidebarTop';
import {SidebarNav} from './SidebarNav';
import '../../styles/myProfile/sidebar.scss'

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

interface SidebarProps{
    navKey:string;
    setNavKey:(nav_key:string)=>void;
    
}

const Sidebar:FC<SidebarProps> = ({navKey, setNavKey}) => {

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

