import {FC} from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import Dotdotdot from 'react-dotdotdot'
import {Badge} from './Badge'
import {Wishlist} from './Wishlist'
import {Image} from './Image'
import {ColorVariation} from './ColorVariation'
import {Rating} from './Rating'
import {Price} from './Price'
import {CartButton} from './CartButton'
import '../styles/product-card.scss'


interface ProductCardProps{
    // badge
    badgeTitle:string;
    // wishlist
    isWishlistAdded:boolean;
    onWishlistClick?: () => void;
    // image
    CardImageList?:string[];
    // color attribute
    colorAttrbute?:string[];
    onAttrClick?:()=> void;
    //product title
    productTitle:string;
    //price
    currentPrice:number;
    regularPrice?:number;
    currency?:string
    //rating
    ratingGiven?:number;
    avgRating?:number;
    //card button
    onAddtoCard?:()=>void
    cardImage:string;
}

const ProductCard:FC<any> = () => {
    return (
        <div className="product-card">
            <a href={"/"} className="product-link">
            </a>
            <Wishlist isWishlistAdded={false}/>
            <div className="badge-section">
                <Badge title={"badgeTitle"}/>  
            </div>
            <div className="product-image">
                    <img src="sum2.jpg"></img>
            </div>
            <div className="product-attributes">
                <ColorVariation/>
            </div>
            <div className="product-title">
                Sumsung Galaxy S52s -Silver color
            </div>
            <div className="product-price">
                <Price currentPrice={455222} regularPrice={524326}/>   
            </div>
            <div className="product-add-to-cart">
                <CartButton label='Add to Cart' color='cart'/>
            </div>
        </div>
    )
}

export default ProductCard