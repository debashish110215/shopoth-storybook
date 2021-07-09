import {FC} from 'react'
import '../styles/badge.scss'

interface BadgeProps{
    title:string
}

export const Badge:FC<BadgeProps> = ({title}:BadgeProps) => {
    return (
        <button className='badge'>
            {title}
        </button>
    )
}

