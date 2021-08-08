import {FC} from 'react';
import Dotdotdot from 'react-dotdotdot'
import {CartButton} from '../CartButton'
import {Wishlist} from '../Wishlist'
import '../../styles/myProfile/yourFavourite.scss';
import {Favourite} from './MyProfilePage'


interface YourFavouritProps{
    favouriteProductList:Array<Favourite>;
    onAddToCart:()=>void;
}

const YourFavourit:FC<YourFavouritProps> = ({favouriteProductList, onAddToCart}) => {
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
                                <CartButton label='Add to Cart' color='cart'/>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}

export default YourFavourit
