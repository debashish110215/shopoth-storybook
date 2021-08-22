import {FiSearch} from 'react-icons/fi';
import {TiArrowSortedDown} from 'react-icons/ti';
import '../../styles/pickupPoints/searchStore.scss';

const thanas = [
    {id:1, title:'Thana 1', value:'thana1'},
    {id:2, title:'Thana 2', value:'thana2'},
    {id:3, title:'Thana 3', value:'thana3'},
    {id:4, title:'Thana 4', value:'thana4'},
    {id:5, title:'Thana 5', value:'thana5'},
]
const areas = [
    {id:1, title:'Area 1', value:'area1'},
    {id:2, title:'Area 2', value:'area2'},
    {id:3, title:'Area 3', value:'area3'},
    {id:4, title:'Area 4', value:'area4'},
    {id:5, title:'Area 5', value:'area5'},
]

const SearchStore = () => {
    return (
        <div className='searchStoreWrapper'>
            <h4>Search Stores Near You</h4>
            <div className="ownerStore">
                <input 
                    type="text" 
                    placeholder='Store ID/Owner Name'
                />
                <FiSearch className='searchIcon'/>
            </div>
            <div className="address">
                <div className="thana">
                    <select name="thana" className='formSelect'>
                        <option value="">Thana</option>
                        {
                            thanas.map(thana =>(
                                <option 
                                    value={`${thana.value}`} 
                                    key={thana.id}
                                >
                                    {thana.title}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className="area">
                        <select name="area" className='formSelect'>
                        <option value="">Area</option>
                        {
                            areas.map(area =>(
                                <option 
                                    value={`${area.value}`} 
                                    key={area.id}
                                >
                                    {area.title}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SearchStore
