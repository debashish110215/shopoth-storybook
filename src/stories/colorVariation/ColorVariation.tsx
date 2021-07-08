import {FC} from 'react'
import './colorVariation.scss'

interface ColorVariationProps{
    colorAttrbute?:string[],
    onAttrClick?:()=> void

}

export const ColorVariation:FC<ColorVariationProps> = ({colorAttrbute=['red', 'black', 'blue','white'], onAttrClick}) => {
    return (
        <div className='color-variation'>
            {
                colorAttrbute.length > 0 &&
                colorAttrbute.map((color, index) =>(
                    <div className={`variation-${color}`} key={index}></div>
                ))
            }
        </div>
    )
}


