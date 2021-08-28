import {AiOutlineArrowDown, AiOutlinePhone, AiOutlineUser} from "react-icons/ai";
import {Rating} from "../Rating";

export const SDRRC = () => {
    return (
        <>
            <div className="details">
                <AiOutlineUser className='navIcon' size={22}/>
                <span className='name'>
                        &nbsp;Md. Zamal Hossain
                    </span>
                {/* <span className='location'>
                        Location
                    </span>*/}
            </div>
            <div className="details">
                <AiOutlinePhone className='navIcon' size={18}/>
                <span className='phone'>
                        &nbsp;01725 569 652
                    </span>
            </div>
            <div className="details">
                    <span className='storeId'>
                        Store #0125635
                    </span>
            </div>
            <div className="details">
                    <span className='storeLoc'>
                        Amborkhna Bus stand
                    </span>
            </div>
            <div className="details">
                    <span className='storeLoc'>
                        Sylhet
                    </span>
            </div>
            <div className="details rrc">
                <div className="theRatings">
                    <Rating/>
                </div>
                <div className='totalRatings'>
                    133 Ratings
                </div>
                <div className='totalComments'>
                    133 Comments
                </div>
            </div>
            <div className="details serviceHour">
                <div className="sh-heading">
                    <span className="shText">Service Hour</span>
                    <span className="shIcon"><AiOutlineArrowDown/></span>
                </div>
                <div className="day">
                    Saturday
                </div>
                <div className='time'>
                    10:00 - 09:00PM
                </div>
                <div className="day">
                    Sunday
                </div>
                <div className='time'>
                    10:00 - 09:00PM
                </div>
                <div className="day">
                    Monday
                </div>
                <div className='time'>
                    10:00 - 09:00PM
                </div>
                <div className="day">
                    Tuesday
                </div>
                <div className='time'>
                    10:00 - 09:00PM
                </div>
                <div className="day">
                    Wednesday
                </div>
                <div className='time'>
                    10:00 - 09:00PM
                </div>
                <div className="day">
                    Thursday
                </div>
                <div className='time'>
                    10:00 - 09:00PM
                </div>
                <div className="day">
                    Friday
                </div>
                <div className='close'>
                    Close
                </div>
            </div>
        </>
    )
}
