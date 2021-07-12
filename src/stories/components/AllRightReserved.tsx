import {FC} from 'react'
import '../styles/allrightsreserved.scss'


interface AllRigtsReservedProps{
    year?:string
}
export const AllRightReserved:FC<AllRigtsReservedProps> = ({year}:AllRigtsReservedProps) => {
    return (
        <div className='all-rights-reserved'>
            <p>&copy; 2021 <a href="www.shopoth.com">Shopoth.com</a> Limited. All rights reserved.</p>
        </div>
    )
}

export default AllRightReserved
