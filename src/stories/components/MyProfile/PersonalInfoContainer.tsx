import {FC, useState} from 'react'
import '../../styles/myProfile/personalInfoContainer.scss';
import {PersonalInfo} from './PersonalInfo';
import {PersonalInfoEdit} from './PersonalInfoEdit';
import {MyAddress} from './MyAddress'
import {User, Address, Zilla, Area, Zone} from './MyProfilePage'

interface PersonalInfoContainerProps{
    userDetails:User;
    userAddress:Address[];
    zillas:Zilla[];
    areas:Area[];
    zones:Zone[];
}

const PersonalInfoContainer:FC<PersonalInfoContainerProps> = ({
    userDetails, 
    userAddress, 
    zillas, 
    areas, 
    zones
}) => {

    const [showPersonalInfo, setShowPersonalInfo] = useState('update')
    return (
        <div className='personalInfoContWrapper'>
            <div className="personalInfo">
                {
                    showPersonalInfo === 'edit'?
                    (
                        <PersonalInfoEdit 
                        userDetails={userDetails} 
                        setShowPersonalInfo={setShowPersonalInfo}
                    /> 
                    ):
                    (
                        <PersonalInfo 
                        userDetails={userDetails} 
                        setShowPersonalInfo={setShowPersonalInfo}
                    /> 
                    )
                }
            </div>
            <div className="myAddressdetails">
                <MyAddress 
                    userAddress={userAddress} 
                    zillas={zillas} 
                    areas={areas} 
                    zones={zones}
                />
            </div>
        </div>
    )
}

export default PersonalInfoContainer
