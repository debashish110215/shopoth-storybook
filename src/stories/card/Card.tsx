import {FC} from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import {Badge} from '../badge/Badge'
import {Wishlist} from '../wishlist/Wishlist'
import {Image} from '../image/Image'
import {ColorVariation} from '../colorVariation/ColorVariation'
import {Rating} from '../rating/Rating'
import {Price} from '../price/Price'
import {CartButton} from '../button/CartButton'
import './card.scss'


interface CardProps{
    // badge
    badgeTitle:string;
    // wishlist
    isWishlistAdded:boolean;
    onWishlistClick?: () => void;
    // image
    CardImageList:string[];
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

const Card:FC<CardProps> = ({badgeTitle, cardImage, productTitle}:CardProps) => {
    return (
        <Router>
            <div className="card">
                <div className="card-badge">
                    <Badge title={badgeTitle}/>  
                </div>
                <div className="card-wishlist">
                    <Wishlist isWishlistAdded={false}/>
                </div>
                <div className="card-colorAttr">
                    <ColorVariation/>
                </div>
                <div className='card-btn'>
                    <CartButton label='Add to Cart' color='cart'/>   
                </div>
                <Link to='/' className='card-main'>
                    <div className="product-img">
                        <Image imageUrl={cardImage} title='sumsung mobile'/>
                    </div>
                   
                    <div className='card-title'>
                        <h4>{productTitle}</h4>
                    </div>
                    <div className="card-rating">
                        <Rating/>
                    </div>
                    <div className="card-price">
                        <Price currentPrice={455222} regularPrice={524326}/>   
                    </div>
            </Link>
            
        </div>
        </Router>
      
       
    )
}

export default Card
