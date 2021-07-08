import './price.scss'

interface PriceProps{
    currentPrice:number;
    regularPrice?:number;
    currentPriceSize?:number;
    regularPriceSize?:number;

}

export const Price = ({regularPrice =586452, currentPrice, currentPriceSize=1.2, regularPriceSize=1}:PriceProps) => {
    return (
        <div 
        className={['price-container'].join(' ')}
       
        >
            <div className='currentPrice'  style ={{fontSize:`${currentPriceSize}rem`}}>
                <p>Tk {currentPrice}</p>
            </div>
            { regularPrice &&  
            <div className='regularPrice'  style ={{fontSize:`${regularPriceSize}rem`}}>
                <p>Tk {regularPrice}</p>
            </div>
            }
          
        </div>
    )
}


