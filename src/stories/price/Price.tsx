import './price.scss'

interface PriceProps{
    currentPrice:number;
    regularPrice?:number;
    currentPriceSize?:number;
    regularPriceSize?:number;
    currency?:string

}

export const Price = ({regularPrice, currentPrice, currentPriceSize=1.2, regularPriceSize=1, currency='Tk'}:PriceProps) => {
    return (
        <div 
        className={['price-container'].join(' ')}
       
        >
            <div className='currentPrice'  style ={{fontSize:`${currentPriceSize}rem`}}>
                <p>{currency} {currentPrice}</p>
            </div>
            { regularPrice &&  
            <div className='regularPrice'  style ={{fontSize:`${regularPriceSize}rem`}}>
                <p>{currency} {regularPrice}</p>
            </div>
            }
          
        </div>
    )
}


