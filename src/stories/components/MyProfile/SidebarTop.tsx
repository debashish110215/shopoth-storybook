import {FC} from 'react'
import '../../styles/myProfile/sidebarTop.scss'
import Avatar from 'react-avatar';

interface SidebarTopProps{
    userImgUrl?:string;
    userName:string;
    userId:string;
    accountCreationDate:string;

}

export const SidebarTop:FC<SidebarTopProps> = ({userName, userImgUrl='', userId, accountCreationDate}) => {
    return (
        <div className='ProfileSidebarTopWrapper'>
            <div className="ProfileImgSection">
                {
                    userImgUrl? (
                        <img className='profilePic' src={`${userImgUrl}`} alt="profile img" />
                    ):(
                        <Avatar name={`${userName}`}  size="170" round={true} />
                    )
                }
            </div>
            <div className="ProfileInfo">
                <h4 className='profileName'>{userName}</h4>
                <h4 className='ProfileId'>{userId}</h4>
                <p>Member since {accountCreationDate}</p>
            </div>
        </div>
    )
}


