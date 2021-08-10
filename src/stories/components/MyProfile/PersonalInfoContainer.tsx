import {FC, useState} from 'react'
import '../../styles/myProfile/personalInfoContainer.scss';
import {PersonalInfo} from './PersonalInfo';
import {PersonalInfoEdit} from './PersonalInfoEdit';
import {MyAddress} from './MyAddress'
import MyOutletShop from './MyOutletShop';

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
const PersonalInfoContainer:FC = () => {

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
                <MyAddress />
            </div>
            <div className="outlet">
                <MyOutletShop/>
            </div>
        </div>
    )
}

export default PersonalInfoContainer
