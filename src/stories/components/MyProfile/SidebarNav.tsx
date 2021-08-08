import {FC} from 'react';
import {BsBell, BsPencil, BsBoxArrowLeft} from 'react-icons/bs';
import {IoMdHeartEmpty} from 'react-icons/io';
import {AiOutlineInbox, AiOutlineUser} from 'react-icons/ai';
import '../../styles/myProfile/sidebarNav.scss';

interface SidebarNavProps {
    navKey:string;
    setNavKey:(nav_key:string)=>void;
    id:number;
}

export const SidebarNav:FC<SidebarNavProps> = ({navKey,setNavKey, id}:SidebarNavProps) => {
    return (
        <div className='profileSidebarNavWrapper'>
            <ul className='profileNavList'>
                <li 
                    className={`profileNavItem ${ navKey === 'account_info'?'selectedNav':''}`} 
                    onClick={()=>setNavKey('account_info')}> 
                    <AiOutlineUser className='navIcon' size={24}/> 
                    <span className='profileNavText'>
                        Account Information
                    </span>
                </li>
                <li 
                    className={`profileNavItem ${ navKey === 'notification'?'selectedNav':''}`} 
                    onClick={()=>setNavKey('notification')}> 
                    <BsBell className='navIcon' size={24}/>
                    <span className='profileNavText'>
                        Notification
                    </span>
                </li>
                <li 
                    className={`profileNavItem ${ navKey === 'my_orders'?'selectedNav':''}`} 
                    onClick={()=>setNavKey('my_orders')}>
                    <AiOutlineInbox className='navIcon' size={24}/>
                    <span className='profileNavText'>
                        My Orders
                    </span>
                </li>
                <li 
                    className={`profileNavItem ${ navKey === 'wishlist'?'selectedNav':''}`} 
                    onClick={()=>setNavKey('wishlist')}>
                    <IoMdHeartEmpty className='navIcon' size={24}/>
                    <span className='profileNavText'>
                        Wishlist
                    </span> 
                </li>
                <li 
                    className={`profileNavItem ${ navKey === 'change_password'?'selectedNav':''}`} 
                    onClick={()=>setNavKey('change_password')}>
                    <BsPencil className='navIcon' size={24}/> 
                    <span className='profileNavText'>
                        Change Password
                    </span>
                </li>
                <li 
                    className={`profileNavItem ${ navKey === 'sign_out'?'selectedNav':''}`} 
                    onClick={()=>setNavKey('sign_out')}>
                    <BsBoxArrowLeft className='navIcon' size={24}/>
                    <span className='profileNavText'>
                        Sign Out
                    </span>
                </li>
            </ul>
        </div>
    )
}


