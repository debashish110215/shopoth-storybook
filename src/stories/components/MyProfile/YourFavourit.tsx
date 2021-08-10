import Dotdotdot from 'react-dotdotdot'
import {CartButton} from '../CartButton'
import {Wishlist} from '../Wishlist'
import '../../styles/myProfile/yourFavourite.scss';

const favouriteProductList = [
    { 
        id:1,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        price:3500 ,
        currency:'Tk'
    },
    {   id:2,
        imgUrl:'./shopoth/images/png/download.png', 
        productTitle:'Asus RT-AC1200 V2 Dual-Band Wifi Wireless Router', 
        price:3500 ,
        currency:'Tk'
    },
    {   id:3,
        imgUrl:'./shopoth/images/png/G03.jpg', 
        productTitle:'Body Lotion for Dry Skin', 
        price:3500 ,
        currency:'Tk'
    },
]

const YourFavourit = () => {
    const onAddToCart = () =>{

    }
    return (
        <div className='yourFavouriteWrapper'>
            <div className="yourFavouriteHeader">
                <h4>Your Favourites</h4>
            </div>
            {
                favouriteProductList.length > 0 &&
                favouriteProductList.map(item =>(
                    <div className="favoriteItem" key={item.id}>
                        <div className="favouriteImgwraper">
                            <div className="whishlistIcon">
                                <Wishlist isWishlistAdded={true}/>
                            </div>
                            <img className='favouriteImg' src={`${item.imgUrl}`} alt={`${item.productTitle}`} />
                        </div>
                        <div className="favouriteContent">
                            <div className="favouriteItemDes">
                                {/* <Dotdotdot clamp={4}> */}
                                    <h4>{item.productTitle}</h4>
                                {/* </Dotdotdot> */}
                                <p>{item.currency || 'Tk '}{item.price}</p> 
                            </div>
                            <div className="addToCartbtn">
                                <CartButton label='Add to Cart' color='cart' onClick={onAddToCart}/>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}

export default YourFavourit
