import './price.scss'

interface PriceProps{
    currentPrice: string;
    regularPrice?: string;
    currency?: string;
    size?:number;
    color?:'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'| 'cart'|'light'|'dark';

}

export const Price = ({regularPrice, currentPrice, currency="Tk", size=0.8, color='dark'}:PriceProps) => {
    return (
        <div 
        className={['price-container', `text-${color}`].join(' ')}
        style ={{fontSize:`${size}rem`}}
        >
            <div className='currentPrice'>{currency} {currentPrice}</div>

            {
                regularPrice &&  <div className='regularPrice'>{currency} {regularPrice}</div>
            }
          
        </div>
    )
}


