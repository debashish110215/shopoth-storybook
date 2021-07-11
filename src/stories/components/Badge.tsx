import {FC} from 'react'
import '../styles/badge.scss'

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

