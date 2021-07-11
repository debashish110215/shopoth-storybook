import {FC} from 'react'
import '../styles/image.scss'

interface ImageProps{
    imageUrl:string;
    title?:string
}

export const Image:FC<ImageProps> = ({imageUrl, title='Card Image'}:ImageProps) => {
    return (
        <div className='card-img' >
           <img src={`${imageUrl}`} alt={`${title}`}  /> 
        </div>
    )
}

