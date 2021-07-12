import {FC} from 'react'
import '../styles/ourbrands.scss'

interface OurBrandProps{
    brands?:string[]
}
export const OurBrands:FC<OurBrandProps> = ({brands}:OurBrandProps) => {
    return (
        <div className='our-brands'>
            <div className="brand-text">
                <h4>Know Our Brands </h4>
            </div>
            <div className="barnd-logo">
                <ul>
                    <li><a href="#"><img src="./icons/rocket.svg" alt="telenor"/></a></li>
                    <li><a href="#"><img src="./icons/rocket.svg" alt="telenor"/></a></li>
                    <li><a href="#"><img src="./icons/rocket.svg" alt="telenor"/></a></li>
                    <li><a href="#"><img src="./icons/rocket.svg" alt="telenor"/></a></li>
                </ul>
            </div>
           
        </div>
    )
}


