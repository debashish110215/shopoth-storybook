import {FC} from 'react';
import '../../styles/myProfile/myOutletShopDetails.scss';
import {Outlet} from './types'


interface MyOutletShopDetailsProps{
    outletList:Array<Outlet>
}

export const MyOutletShopDetails:FC<MyOutletShopDetailsProps>= ({outletList}:MyOutletShopDetailsProps) => {
    console.log('outlet', outletList);
    
    return (
        <div className='myOutletDetailsWrapper'>
            {
                outletList?.map( (outlet, index)=>(
                    <div className="myOutlet" key={index}>
                        <div className="serialNo">
                            {index + 1}.
                        </div>
                        <div className="outletInfo">
                            <p> {outlet.name}</p>
                            <p>Store #0{outlet.outletId}</p>
                            <address>{outlet.address}, </address>
                            <address>{outlet.district}</address>
                        </div>
                        <div className="ownerInfo">
                            <p>
                                <img  className='imageIcon' src="./shopoth/icon/Person.svg" alt="owner" />
                                <span className='owner'>{outlet.ownerName}</span>
                            </p>
                            <p> 
                                <img className='imageIcon' src="./shopoth/icon/Frame.svg" alt="phone" />
                                <span className='owner'>{outlet.phone}</span>
                                
                                </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
 

