import {FC, useState, useEffect} from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom';
import {CartButton} from './CartButton'
import '../styles/filterProductList.scss'

interface FilterProductListProps{
    productList?:any[];
    currency?:string;
    category_id?:number;
}
export const FilterProductList:FC<FilterProductListProps> = ({productList, currency='Tk'}:FilterProductListProps) => {
    const [filteredProducts, setFilteredProduct] =useState<any>([])
    const [products, setProduct] = useState(
        [
            {
                id:1,
                category_id:1,
                title:'Liberty T-Shirt Onnyaer Biruddhey Latthi Maar - Black',
                imgUrl:'./images/fashion/t-shirt.jpg',
                price:3560
            },
            {
                id:2,
                category_id:1,
                title:'Skin Boutiqes-(violet)',
                imgUrl:'./images/fashion/skin-butiques.jpg',
                price:3567
            },
            {
                id:3,
                category_id:2,
                title:'ASTRUM Headphone HS120',
                imgUrl:'./images/phone/ASTRUM Headphone HS120.jpg',
                price:3560
            },
            {
                id:4,
                category_id:2,
                title:'Realme C11 32gb 2gb Pepper Grey',
                imgUrl:'./images/phone/Realme C11 32gb 2gb Pepper Grey.jpg',
                price:3560
            },
            {
                id:5,
                category_id:3,
                title:'sanford hair dryer hd',
                imgUrl:'./images/electronics/0009828_sanford-hair-dryer-sf988hd.jpg',
                price:3560
            },
            {
                id:6,
                category_id:3,
                title:'ASTRUM Webcam WM720',
                imgUrl:'./images/electronics/ASTRUM Webcam WM720.jpg',
                price:3560
            },
            {
                id:7,
                category_id:4,
                title:'DABUR SANITIZE Hand Sanitizer 60ml (Buy 1 Get 1 Free)',
                imgUrl:'./images/health/DABUR-SANITIZE-Hand-Sanitizer-60ml-(Buy-1-Get-1-Free).jpg',
                price:3560
            },
            {
                id:8,
                category_id:4,
                title:'Tokma Seeds (Basil) 100gm',
                imgUrl:'./images/health/Tokma-Seeds-(Basil)-100gm.jpg',
                price:3560
            },
        ]
    )
    console.log('products', products)
    return (
        <Router>
            <div className='search-product-list-wrapper'>
                <div className='category-title'>
                    <h4>All Phone and accessories</h4>
                </div>
                {
                    products.map(product =>(
                        <Link to='/' className='search-product'>
                            <div className='product-img'>
                                <img src={`${product.imgUrl}`} alt="product image" />
                            </div>
                            <div className='product-info'>
                                <h4>{product.title}</h4>
                                <p>{currency} {product.price}</p>
                            </div>
                        </Link>
                    
                    ))
                }
                <div>
                    <CartButton label='View all results for'  color='cart' search_key='sumsung'/>
                </div>
            </div>
        </Router>
        
    )
}

