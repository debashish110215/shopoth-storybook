import { FC, useState } from 'react';
import StarsRating from 'react-star-rate';
import './rating.scss'

interface RatingProps{
    onRatingClick?:()=> void;
    noOfRating?:number
}

export const Rating:FC<RatingProps> = ({onRatingClick, noOfRating = 10}:RatingProps) => {
    const [value, setValue] = useState<number|undefined>(0);
    return (
        <div className='card-rating'>
            
                <StarsRating
                    value={value}
                    classNamePrefix='react-star-rate'
                    onChange={val => {
                    setValue(val);
                    }}
            />
            

        <div className='rating-num'>{noOfRating && <p>{noOfRating}</p>}</div>
        </div>
    )
}


