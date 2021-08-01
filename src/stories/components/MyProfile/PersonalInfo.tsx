import {FC} from 'react'
import '../../styles/myProfile/personalInfo.scss';
import {Users} from './PersonalInfoContainer'

interface PersonalInfoProps{
    userDetails:Users
}
export const PersonalInfo:FC<PersonalInfoProps> = ({userDetails}:PersonalInfoProps) => {
    return (
        <div className='personalInfoWrapper'>
            <div className="personalInfoHeader">
                <h4>Personal Information</h4>
                <p>Edit</p>
            </div>
            <div className="personalInfo">
                <div className="personalInfoItem">
                    <h5>Full Name</h5>
                    <p>{userDetails.fullName}</p>
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


