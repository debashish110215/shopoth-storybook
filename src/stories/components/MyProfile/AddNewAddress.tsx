import React,{useState} from 'react'
import { Overlay } from '../Overlay';
import {SubmitButton} from '../SubmitButton'
import {GrFormClose} from 'react-icons/gr'
import '../../styles/myProfile/addNewAddress.scss';
import {Zilla, Area, Zone} from './MyProfilePage';

interface AddNewAddressProps{
    showMsgPopUp:boolean;
    setShowMsgPopUp:(value:boolean) => void ;
    zillas:Zilla[];
    areas:Area[];
    zones:Zone[];
    address_key:string;
}

const AddNewAddress:React.FC<AddNewAddressProps> = ({showMsgPopUp, setShowMsgPopUp, zillas, areas, zones, address_key}) => {
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
                            <h4>{address_key === 'add'? 'Add':'Edit'} New Address</h4>
                            <div className="addNewAddressForm">
                                <div className="addressName">
                                    <label className='formLabel' htmlFor="address_name">Address Name</label>
                                    <input className='fromInput' type="text" placeholder='Insert Address Name'/>
                                </div>
                                <div className="addresses">
                                    <label className='formLabel' htmlFor="addresses">Addresses</label>
                                    <input className='fromInput' type="text" placeholder='Address Line 1'/>
                                    <input className='fromInput' type="text" placeholder='Address Line 2'/> 
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
                            <SubmitButton label='Add New Address' color='cart'/>
                        </div>
                    </form>
                </div>
            </div>
            
        }/>
    )
}

export default AddNewAddress
