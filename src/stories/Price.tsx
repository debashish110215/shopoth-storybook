import './price.scss'

interface PriceProps{
    currentPrice:number;
    regularPrice?:number;
    size?:number;
    color?:'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'| 'cart'|'light'|'dark';

}

export const Price = ({regularPrice, currentPrice, size=0.8, color='dark'}:PriceProps) => {
    return (
        <div 
        className={['price-container', `text-${color}`].join(' ')}
        style ={{fontSize:`${size}rem`}}
        >
            <div className='currentPrice'>Tk {currentPrice}</div>

            {
                regularPrice &&  <div className='regularPrice'>Tk {regularPrice}</div>
            }
          
        </div>
    )
}


