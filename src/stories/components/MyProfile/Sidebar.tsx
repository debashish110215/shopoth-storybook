import {FC} from 'react';
import {SidebarTop} from './SidebarTop';
import {SidebarNav} from './SidebarNav';
import '../../styles/myProfile/sidebar.scss'


interface SidebarProps{
    userImgUrl?:string;
    userName:string;
    userId:string;
    id:number;
    accountCreationDate:string;
    // onSelectNav:(id:number, nav_key:string)=>void;
    
}

const Sidebar:FC<SidebarProps> = ({id, userName, userId, userImgUrl, accountCreationDate}:SidebarProps) => {

    const onSelectNav = (id:number, nav_key:string)=>{
        console.log('id', id, 'key', nav_key)
    }
    return (
        <div className='profileSidebarWrapper'>
            <div className="profileSidebarTop">
                <SidebarTop 
                    userName={userName} 
                    userId={userId} 
                    userImgUrl={userImgUrl}
                    accountCreationDate={accountCreationDate}
                />
            </div>
            <div className="profileSidebarNav">
                <SidebarNav id={id} onSelectNav={onSelectNav}/>
            </div>
        </div>
    )
}

export default Sidebar
