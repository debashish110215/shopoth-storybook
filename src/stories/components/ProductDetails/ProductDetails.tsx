import {FC} from 'react'
import CustomerReviewNRatings from '../LocalStoreRatings/CustomerReviewNRatings'
import '../../styles/productDetails/main.scss'

interface ProductDetailsProps {}

export const ProductDetails:FC<ProductDetailsProps> = ({...props}: ProductDetailsProps) => {
    return (
        <div className="pdWrapper">
            <div className="pdCrnrWrapper">
                <CustomerReviewNRatings />
            </div>
        </div>
    )
}
