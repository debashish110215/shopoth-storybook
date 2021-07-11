import {FC} from 'react'
import './badge.scss'

interface BadgeProps{
    title:string
}

export const Badge:FC<BadgeProps> = ({title}:BadgeProps) => {
    return (
        <div className='badge'>
            {title}
        </div>
    )
}

