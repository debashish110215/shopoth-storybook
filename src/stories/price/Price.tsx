import NumberFormat from 'react-number-format';
import './price.scss'

interface PriceProps{
    currentPrice:number;
    regularPrice?:number;
    currentPriceSize?:number;
    regularPriceSize?:number;
    currency?:string

}

export const Price = ({regularPrice, currentPrice, currentPriceSize=1.2, regularPriceSize=0.9, currency='Tk'}:PriceProps) => {
    return (
        <div 
        className={['price-container'].join(' ')}
       
        >
            <div className='currentPrice'  style ={{fontSize:`${currentPriceSize}rem`}}>
                <p>
                {currency} <NumberFormat value={currentPrice} displayType={'text'} thousandSeparator={true} />
                </p>
            </div>
            { regularPrice &&  
            <div className='regularPrice'  style ={{fontSize:`${regularPriceSize}rem`}}>
                <p>
                {currency} <NumberFormat value={regularPrice} displayType={'text'} thousandSeparator={true} />
                </p>
            </div>
            }
          
        </div>
    )
}


