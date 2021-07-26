import NumberFormat from 'react-number-format';
import '../styles/price.scss'

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
            <div className='currentPrice'>
                <p>
                {currency} <NumberFormat value={currentPrice} displayType={'text'} thousandSeparator={true} />
                </p>
            </div>
            { regularPrice &&  
            <div className='regularPrice'>
                <p>
                {currency} <NumberFormat value={regularPrice} displayType={'text'} thousandSeparator={true} />
                </p>
            </div>
            }
          
        </div>
    )
}


