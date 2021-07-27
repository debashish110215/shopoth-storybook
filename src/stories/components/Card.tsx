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
import '../styles/card.scss'


interface CardProps{
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
                        <Dotdotdot clamp={3}>
                            <h4>{productTitle}</h4>
                        </Dotdotdot>
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
