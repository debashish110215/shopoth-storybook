import '../../styles/localStoreRatings/storeInfo.scss'
import {Wishlist} from "../Wishlist";
import {AiOutlinePhone, AiOutlineUser} from "react-icons/ai";
import {Rating} from "../Rating";

const StoreInfo = () => {
    return (
        <>
            <div className="storeInfoWrapper">
                <div className="heading">Zamal Store</div>
                <div className="img image_with_wishlist">
                    <Wishlist isWishlistAdded={true}/>
                    <img src="https://picsum.photos/500/300/?image=10"/>
                </div>
                <div className="loc">
                    <img
                        src="https://www.researchgate.net/profile/Vandana-Juyal/publication/265973728/figure/fig1/AS:670715145629698@1536922360149/Fig-1-Google-Map-of-New-Delhi-India.ppm"/>
                </div>

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
                    <div className="heading">
                        Service Hour
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
            </div>
        </>
    )
}

export default StoreInfo
