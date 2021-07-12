import {FC} from 'react'
import {FaMobileAlt} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import '../styles/footerSocialLink.scss'

interface FooterSocialLinkProps{
    link?:{}
}

export const FooterSocialLink:FC<FooterSocialLinkProps> = ({link}:FooterSocialLinkProps) => {
    return (
        <div className='footer-social-link'>
            <div className="social-app-link">
                <ul>
                    <li><a href="#"><FaFacebook size='2em'/></a></li>
                    <li><a href="#"><FaInstagram size='2em'/></a></li>
                    <li><a href="#"><FaYoutube size='2em'/></a></li>
                </ul>
            </div>
            <div className="mobile-app-link">
                <a href="#"><FaMobileAlt size='1em'/> Mobile App</a>
            </div>
            
        </div>
    )
}

