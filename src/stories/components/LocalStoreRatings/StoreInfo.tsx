import '../../styles/localStoreRatings/storeInfo.scss'
import {Wishlist} from "../Wishlist";
import {SDRRC} from './SDRRC'
import {useEffect, useState} from "react";

const StoreInfo = () => {
    const [width, setWidth] = useState(1024)
    useEffect(() => {
        function handleResize() {
            console.log(width)
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
    })

    return (
        <>
            <div className="storeInfoWrapper">
                <div className="si-heading">Zamal Store</div>
                <div className="img image_with_wishlist">
                    <Wishlist isWishlistAdded={true}/>
                    <img src="https://picsum.photos/500/300/?image=10"/>
                </div>
                {width >= 768 ?
                    <>
                        <div className="loc">
                            <img
                                src="https://www.researchgate.net/profile/Vandana-Juyal/publication/265973728/figure/fig1/AS:670715145629698@1536922360149/Fig-1-Google-Map-of-New-Delhi-India.ppm"/>
                        </div>
                        <SDRRC/>
                    </> : <>
                        <SDRRC/>
                        <div className="loc">
                            <img
                                src="https://www.researchgate.net/profile/Vandana-Juyal/publication/265973728/figure/fig1/AS:670715145629698@1536922360149/Fig-1-Google-Map-of-New-Delhi-India.ppm"/>
                        </div>
                        <div className='location'>
                            Location
                        </div>
                    </>}
            </div>
        </>
    )
}

export default StoreInfo
