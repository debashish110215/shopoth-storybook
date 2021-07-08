import {FC} from 'react'
import {Badge} from '../badge/Badge'
import {Wishlist} from '../wishlist/Wishlist'
import {Image} from '../image/Image'
import {ColorVariation} from '../colorVariation/ColorVariation'
import {Rating} from '../rating/Rating'
import {Price} from '../price/Price'
import {CartButton} from '../button/CartButton'
import './card.scss'


interface CardProps{
    badgeTitle:string;
    cardImage:string;
    productTitle:string;
    productVariation:string;
}

const Card:FC<CardProps> = ({badgeTitle, cardImage, productTitle, productVariation}:CardProps) => {
    return (
        <div className='card'>
            <div className="card-head">
                <Badge title={badgeTitle}/>
                <Wishlist isWishlistAdded={false}/>
            </div>
            <div className="product-img">
                <Image imageUrl={cardImage}/>
            </div>
            <div className="card-body">
                <ColorVariation/>
                <div className='card-title'>
                    <h4>{productTitle}</h4>
                    <h4>-{productVariation}</h4>
                </div>
                <Rating/>
                <Price currentPrice={455222}/>
                <CartButton label='Add to Cart'/>   
            </div>

        </div>
    )
}

export default Card
