import {FC} from 'react'
import '../../styles/myProfile/personalInfo.scss';
import {User} from './types'

interface PersonalInfoProps{
    userDetails:User;
    setShowPersonalInfo:(value:string) => void;
}
export const PersonalInfo:FC<PersonalInfoProps> = ({
    userDetails,
    setShowPersonalInfo
}) => {
    return (
        <div className='personalInfoWrapper'>
            <div className="personalInfoHeader">
                <h4>Personal Information</h4>
                <button onClick = {() => setShowPersonalInfo('edit')}>Edit</button>
            </div>
            <div className="personalInfo">
                <div className="personalInfoItem">
                    <h5>Full Name</h5>
                    <p>{userDetails.userName}</p>
                </div>
                <div className="personalInfoItem">
                    <h5>Email Address</h5>
                    <p>{userDetails.email}</p>
                </div>
                <div className="personalInfoItem">
                    <h5>Phone Number</h5>
                    <p>{userDetails.phone}</p>
                </div>
                <div className="personalInfoItem">
                    <h5>Gender</h5>
                    <p>{userDetails.gender}</p>
                </div>
                <div className="personalInfoItem">
                    <h5>Date of Birth</h5>
                    <p>{userDetails.dob}</p>
                </div>
            </div>
        </div>
    )
}


