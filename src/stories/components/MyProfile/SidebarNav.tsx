import {FC} from 'react';
import {BsBell, BsPencil, BsBoxArrowLeft} from 'react-icons/bs';
import {IoMdHeartEmpty} from 'react-icons/io';
import {AiOutlineInbox, AiOutlineUser} from 'react-icons/ai';
import '../../styles/myProfile/sidebarNav.scss';

interface SidebarNavProps {
    onSelectNav:(id:number, nav_key:string)=>void;
    id:number;
}

export const SidebarNav:FC<SidebarNavProps> = ({onSelectNav, id}:SidebarNavProps) => {
    return (
        <div className='profileSidebarNavWrapper'>
            <ul className='profileNavList'>
                <li 
                    className='profileNavItem' 
                    onClick={()=>onSelectNav(id, 'account_info')}> 
                    <AiOutlineUser className='navIcon' size={24}/> 
                    <span className='profileNavText'>
                        Account Information
                    </span>
                </li>
                <li 
                    className='profileNavItem' 
                    onClick={()=>onSelectNav(id, 'notification')}> 
                    <BsBell className='navIcon' size={24}/>
                    <span className='profileNavText'>
                        Notification
                    </span>
                </li>
                <li 
                    className='profileNavItem' 
                    onClick={()=>onSelectNav(id, 'my_order')}>
                    <AiOutlineInbox className='navIcon' size={24}/>
                    <span className='profileNavText'>
                        My Orders
                    </span>
                </li>
                <li 
                    className='profileNavItem' 
                    onClick={()=>onSelectNav(id, 'wishlist')}>
                    <IoMdHeartEmpty className='navIcon' size={24}/>
                    <span className='profileNavText'>
                        Wishlist
                    </span> 
                </li>
                <li 
                    className='profileNavItem' 
                    onClick={()=>onSelectNav(id, 'change_password')}>
                    <BsPencil className='navIcon' size={24}/> 
                    <span className='profileNavText'>
                        Change Password
                    </span>
                </li>
                <li 
                    className='profileNavItem' 
                    onClick={()=>onSelectNav(id, 'sign_out')}>
                    <BsBoxArrowLeft className='navIcon' size={24}/>
                    <span className='profileNavText'>
                        Sign Out
                    </span>
                </li>
            </ul>
        </div>
    )
}


