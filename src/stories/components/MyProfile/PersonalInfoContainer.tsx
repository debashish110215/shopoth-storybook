import {FC} from 'react'
import '../../styles/myProfile/personalInfoContainer.scss';
import {PersonalInfo} from './PersonalInfo';
import {MyAddress} from './MyAddress'

export interface Users{
    fullName:string;
    email:string;
    phone:string;
    gender:string;
    dob:string;
}

export interface Address{
    addressName:string;
    addressLine:string;
    area?:string;
    zone?:string;
    thana:string;
    district:string;
}

interface PersonalInfoContainerProps{
    userDetails:Users;
    userAddress:Array<Address>;
}


const PersonalInfoContainer:FC<PersonalInfoContainerProps> = ({userDetails, userAddress}:PersonalInfoContainerProps) => {
    return (
        <div className='personalInfoContWrapper'>
            <div className="personalInfo">
                <PersonalInfo userDetails={userDetails}/>
            </div>
            <div className="myAddressdetails">
                <MyAddress userAddress={userAddress}/>
            </div>
        </div>
    )
}

export default PersonalInfoContainer
