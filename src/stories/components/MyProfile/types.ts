
export interface User{
    id:number;
    userId:string;
    userName:string;
    email:string;
    phone:string;
    gender:string;
    dob:string;
    userImgUrl:string;
    accountCreationDate:string;
}
export interface Address{
    addressName:string;
    addressLine:string;
    area?:string;
    zone?:string;
    thana:string;
    district:string;
}
export interface Zilla {
    id:number;
    title:string;
    value:string;
}
export interface Area {
    id:number;
    title:string;
    value:string;
}
export interface Zone {
    id:number;
    title:string;
    value:string;
}
export interface Outlet{
    outletId:number;
    name:string;
    ownerName:string;
    phone:string;
    address:string;
    district:string;
    
}
export interface Favourite{
    id:number;
    imgUrl:string;
    productTitle:string;
    price:number;
    currency?:string;
}
export interface Notification{
    id:number,
    title:string;
    key:string;
    status:string;
    orderId:string;
    oderDate:string;
}
export interface Order{
    id:number;
    imgUrl:string;
    productTitle:string;
    orderId:number;
    amount:number;
    status:string;
    dateTime:string;
    returnDate?:string;
    currency?:string;
    deliveryID?:string;

}
export interface OrderedProduct{
    id:number;
    imgUrl:string;
    productTitle:string;
    quantury:number;
    amount:number;
    status:string;
    dateTime:string;
    currency?:string;
    deliveryId?:string;

}
export interface Payment{
    trxId:string;
    payment_key:string;
}
export interface Shipping{
    recipentName:string;
    phone:string;
    address:Address;

}

export interface OrderedProduct{
    id:number;
    imgUrl:string;
    productTitle:string;
    quantury:number;
    amount:number;
    status:string;
    dateTime:string;
    currency?:string;
    deliveryId?:string;

}