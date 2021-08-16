import React,{useState} from 'react'
import { Overlay } from '../Overlay';
import {SubmitButton} from '../SubmitButton'
import {GrFormClose} from 'react-icons/gr'
import '../../styles/myProfile/addNewAddress.scss';


const zillas = [
    {id:1, title:'Bogura', value:'bogura'},
    {id:2, title:'Rajshahi', value:'rajshahi'},
    {id:3, title:'Dhaka', value:'dhaka'},
    {id:4, title:'Pabna', value:'pabna'},
    {id:5, title:'Sirajgonj', value:'sirajgonj'},
]
const areas = [
    {id:1, title:'Area 1', value:'area1'},
    {id:2, title:'Area 2', value:'area2'},
    {id:3, title:'Area 3', value:'area3'},
    {id:4, title:'Area 4', value:'area4'},
    {id:5, title:'Area 5', value:'area5'},
]
const zones = [
    {id:1, title:'Zone 1', value:'zone1'},
    {id:2, title:'Zone 2', value:'zone2'},
    {id:3, title:'Zone 3', value:'zone3'},
    {id:4, title:'Zone 4', value:'zone4'},
    {id:5, title:'Zone 5', value:'zone5'},
]
interface AddNewAddressProps{
    showMsgPopUp:boolean;
    setShowMsgPopUp:(value:boolean) => void ;
    address_key:string;
}

const AddNewOutletSop:React.FC<AddNewAddressProps> = ({
    showMsgPopUp, 
    setShowMsgPopUp, 
    address_key
}) => {
    return (
        <Overlay show={showMsgPopUp} onClose={() =>setShowMsgPopUp(!showMsgPopUp)} children={

            <div className='newAddressContainer'>
                <div className='addNewAddressWrapper' id='movePopup'>
                    <div className='closeBtn'>
                        <GrFormClose 
                            className='closeBtnIcon' 
                            onClick={()=>setShowMsgPopUp(!showMsgPopUp)}
                            size={24}
                        />
                    </div>
                    <form >
                        <div className="addNewAddressContent">
                            <h4>{address_key === 'add'? 'Add':'Edit'} New Outlet Shop</h4>
                            <div className="addNewAddressForm">
                                <div className="addressName">
                                    <label className='formLabel' htmlFor="address_name">Address Name</label>
                                    <input className='fromInput' type="text" placeholder='Insert Address Name'/>
                                </div>
                                <div className="addresses">
                                    <label className='formLabel' htmlFor="addresses">Addresses</label>
                                    {/* <input className='fromInput' type="text" placeholder='Address Line 1'/>
                                    <input className='fromInput' type="text" placeholder='Address Line 2'/>  */}
                                    <div className='selectGroup'>
                                        <select className='selectZilla' name="" id="">
                                            <option value="">Select a Zilla</option>
                                            {
                                                zillas.length > 0 && 
                                                zillas.map(zilla =>(
                                                    <option value={`${zilla.value}`} key={zilla.id}>{zilla.title}</option>
                                                ))
                                            }
                                        </select>
                                        <select className='selectArea' name="" id="">
                                            <option value="">Select a Area</option>
                                            {
                                                areas.length > 0 && 
                                                areas.map(area =>(
                                                    <option value={`${area.value}`} key={area.id}>{area.title}</option>
                                                ))
                                            }
                                        </select>
                                    </div> 
                                        <select className='selectZone' name="" id="">
                                            <option value="">Select a Zone</option>
                                            {
                                                zones.length > 0 && 
                                                zones.map(zone =>(
                                                    <option value={`${zone.value}`} key={zone.id}>{zone.title}</option>
                                                ))
                                            }
                                        </select>
                                </div>
                            </div>
                        </div>

                        <div className="addBtn">
                            <SubmitButton label='Add New Outlet' color='cart'/>
                        </div>
                    </form>
                </div>
            </div>
            
        }/>
    )
}

export default AddNewOutletSop
