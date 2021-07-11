import {FC} from 'react'
import Card from '../card/Card'
import './cardlistgrid.scss'
interface CardListGridProps{
    title:string;

}

const CardListGrid:FC<CardListGridProps> = ({title}:CardListGridProps) => {
    return (
        <div className='card-container'>
            <Card badgeTitle={title} productTitle='Xiaomi Amazfit Bip U Pro Smart Watch with Built Xiaomi Amazfit Bip U Pro Smart Watch with....' isWishlistAdded={false} currentPrice={485362} cardImage='sum.png'/>
            <Card badgeTitle={title} productTitle='Xiaomi Amazfit Bip U Pro Smart Watch with Built....' isWishlistAdded={false} currentPrice={485362} cardImage='sum.png'/>
            <Card badgeTitle={title} productTitle='Xiaomi Amazfit Bip U Pro Smart Watch with Built....' isWishlistAdded={false} currentPrice={485362} cardImage='sum.png'/>
            <Card badgeTitle={title} productTitle='Xiaomi Amazfit Bip U Pro Smart Watch with Built....' isWishlistAdded={false} currentPrice={485362} cardImage='sum.png'/>
            <Card badgeTitle={title} productTitle='Xiaomi Amazfit Bip U Pro Smart Watch with Built....' isWishlistAdded={false} currentPrice={485362} cardImage='sum.png'/>
            <Card badgeTitle={title} productTitle='Xiaomi Amazfit Bip U Pro Smart Watch with Built....' isWishlistAdded={false} currentPrice={485362} cardImage='sum.png'/>
            <Card badgeTitle={title} productTitle='Xiaomi Amazfit Bip U Pro Smart Watch with Built....' isWishlistAdded={false} currentPrice={485362} cardImage='sum.png'/>
            <Card badgeTitle={title} productTitle='Xiaomi Amazfit Bip U Pro Smart Watch with Built....' isWishlistAdded={false} currentPrice={485362} cardImage='sum.png'/>
            <Card badgeTitle={title} productTitle='Xiaomi Amazfit Bip U Pro Smart Watch with Built....' isWishlistAdded={false} currentPrice={485362} cardImage='sum.png'/>
            <Card badgeTitle={title} productTitle='Xiaomi Amazfit Bip U Pro Smart Watch with Built....' isWishlistAdded={false} currentPrice={485362} cardImage='sum.png'/>
            <Card badgeTitle={title} productTitle='Xiaomi Amazfit Bip U Pro Smart Watch with Built....' isWishlistAdded={false} currentPrice={485362} cardImage='sum.png'/>
            <Card badgeTitle={title} productTitle='Xiaomi Amazfit Bip U Pro Smart Watch with Built....' isWishlistAdded={false} currentPrice={485362} cardImage='sum.png'/>
        </div>
    )
}

export default CardListGrid
