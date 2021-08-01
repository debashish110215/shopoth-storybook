import {FC} from 'react';
import '../../styles/myProfile/myOutletShop.scss';
import {MyOutletShopDetails} from './MyOutletShopDetails';

export interface Outlet{
    outletId:number;
    name:string;
    ownerName:string;
    phone:string;
    address:string;
    district:string;
    
}

interface MyOutletShopProps{
    outletList:Array<Outlet>
}

const MyOutletShop:FC<MyOutletShopProps> = ({outletList}:MyOutletShopProps) => {
    return (
        <div className='myOutletWrapper'>
            <div className="myOutletHeader">
                <h4>My Outlet Shop</h4>
                <p>Add a new</p>
            </div>
            <div className="outletDetails">
                <MyOutletShopDetails outletList={outletList}/>
            </div>
        </div>
    )
}

export default MyOutletShop
