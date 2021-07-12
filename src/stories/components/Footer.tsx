import {FC} from 'react'
import {Subscribe} from './Subscribe'
import {FooterSocialLink} from './FooterSocialLink'
import {FooterShopothInfo} from './FooterShopothInfo'
import {OurBrands} from './OurBrands'
import {AllRightReserved} from './AllRightReserved'
import '../styles/footer.scss'

interface FooterProps{
    brandList?:string[]
}

const Footer:FC<FooterProps> = ({brandList}:FooterProps) => {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-subscribe">
                    <Subscribe/>
                </div>
                <div className="social-link">
                    <FooterSocialLink/>
                </div>
            </div>
            <div className="shopoth-info">
                <FooterShopothInfo/>
            </div>
            <div className="barnds">
                <OurBrands/>
            </div>
            <div className="reserved-text">
                <AllRightReserved/>
            </div>
        </footer>
    )
}

export default Footer
