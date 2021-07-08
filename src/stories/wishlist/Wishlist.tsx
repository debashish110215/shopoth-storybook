
import {FC} from 'react'
import {BsHeart} from 'react-icons/bs'
import {BsHeartFill} from 'react-icons/bs'
import './wishlist.scss'

interface WishlistProps{
    isWishlistAdded:boolean;
    color?:string;
    size?:string;
    onWishlistClick?: () => void;

}

export const Wishlist:FC<WishlistProps> = ({isWishlistAdded = false, color='gray', size='1.5em', ...props}:WishlistProps) => {
    return (
        <div className='card-wishlist'>
           {isWishlistAdded?<BsHeartFill color={color} size={size}/>:<BsHeart color={color} size={size}/> } 
        </div>
    )
}

