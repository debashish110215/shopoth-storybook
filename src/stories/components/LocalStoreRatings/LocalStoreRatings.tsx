
import {FC} from 'react'
import StoreInfo from './StoreInfo'
import CustomerReviewNRatings from './CustomerReviewNRatings'

interface LocalStoreRatingsProps {}

export const LocalStoreRatings:FC<LocalStoreRatingsProps> = ({...props}: LocalStoreRatingsProps) => {
    return (
        <div>
            <StoreInfo />
            <CustomerReviewNRatings />
        </div>
    )
}

