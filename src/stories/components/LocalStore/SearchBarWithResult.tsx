import {FiSearch} from 'react-icons/fi';
import '../../styles/localStore/sbwr.scss';

const SearchBarWithResult = () => {
    return (
        <div className='sbwrWrapper searchStoreWrapper'>
            <div className="line"></div>
            <div className="searchbar">
                <input
                    type="text"
                    placeholder='Shop Name / Store ID / Owner Name'
                />
                <FiSearch className='searchIcon'/>
            </div>
            <div className="googleMap">
                <img src="https://bootstrapious.com/ck_resources/img/google-maps-2.JPG" alt="map" />
            </div>
        </div>

    )
}

export default SearchBarWithResult
