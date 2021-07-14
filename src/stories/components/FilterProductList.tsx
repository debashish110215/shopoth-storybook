import {FC, useState, useEffect} from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import {CartButton} from './CartButton';
import '../styles/filterProductList.scss';

interface FilterProductListProps{
    productList:any[];
    currency?:string;
    category_title?:string;
    search_key?:string;
    onSelectProduct:(id:number)=> void
}
export const FilterProductList:FC<FilterProductListProps> = ({productList,category_title, currency='Tk', search_key, onSelectProduct}:FilterProductListProps) => {
    return (
        <Router>
            <div className='search-product-list-wrapper'>
                {
                    category_title && (
                        <div className='category-title'>
                        <Link to='/'>All {category_title}</Link>
                    </div>
                    )
                }
             
                {
                    productList.length > 0?(
                        <>
                        {
                            productList.map(product =>(
                                <Link to='/' className='search-product' onClick={()=>onSelectProduct(product?.id)} key={product.id}>
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
                        </>
                    ):(
                        <div className='filter-no-product-found'>
                            <p>"No Product Found"</p>
                        </div>
                    )
                 
                }
                <div>
                    <CartButton label='View all results for'  color='cart' search_key={search_key}/>
                </div>
            </div>
        </Router>
        
    )
}

