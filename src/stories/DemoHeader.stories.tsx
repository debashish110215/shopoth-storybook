import { ComponentStory, ComponentMeta } from '@storybook/react';
import DemoHeader from './components/DemoHeader';

export default {
title: 'Shop/DemoHeader',
component: DemoHeader,
argTypes: {
    backgroundColor: { control: 'color' },
},
} as ComponentMeta<typeof DemoHeader>;

const Template: ComponentStory<typeof DemoHeader> = (args) => <DemoHeader {...args} />;

export const DemoHeaderOne = Template.bind({});
DemoHeaderOne.args = {
productList: 
    [
    {
        id:1,
        category_id:1,
        title:'Liberty T-Shirt Onnyaer Biruddhey Latthi Maar - Black',
        imgUrl:'./images/fashion/t-shirt.jpg',
        price:3560,
        selectNoOfItems:5,
        totalPrice:17800
    },
    {
        id:2,
        category_id:1,
        title:'Skin Boutiqes-(violet)',
        imgUrl:'./images/fashion/skin-butiques.jpg',
        price:3567,
        selectNoOfItems:1,
        totalPrice:3567
    },
    {
        id:3,
        category_id:2,
        title:'ASTRUM Headphone HS120 ',
        imgUrl:'./images/phone/ASTRUM Headphone HS120.jpg',
        price:3560,
        selectNoOfItems:12,
        totalPrice:7120
    },
    {
        id:4,
        category_id:2,
        title:'Realme C11 32gb 2gb Pepper Grey',
        imgUrl:'./images/phone/Realme C11 32gb 2gb Pepper Grey.jpg',
        price:3560,
        selectNoOfItems:1,
        totalPrice:3560
    },
    {
        id:5,
        category_id:3,
        title:"sanford hair dryer hd Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        imgUrl:'./images/electronics/0009828_sanford-hair-dryer-sf988hd.jpg',
        price:3560,
        selectNoOfItems:1,
        totalPrice:3560
    },
    {
        id:6,
        category_id:3,
        title:'ASTRUM Webcam WM720',
        imgUrl:'./images/electronics/ASTRUM Webcam WM720.jpg',
        price:3560,
        selectNoOfItems:1,
        totalPrice:3560
    },
    {
        id:7,
        category_id:4,
        title:'DABUR SANITIZE Hand Sanitizer 60ml (Buy 1 Get 1 Free)',
        imgUrl:'./images/health/DABUR-SANITIZE-Hand-Sanitizer-60ml-(Buy-1-Get-1-Free).jpg',
        price:3560,
        selectNoOfItems:1,
        totalPrice:3560
    },
    {
        id:8,
        category_id:4,
        title:'Tokma Seeds (Basil) 100gm',
        imgUrl:'./images/health/Tokma-Seeds-(Basil)-100gm.jpg',
        price:3560,
        selectNoOfItems:1,
        totalPrice:3560
    },
],
selectTotalNoOfItems:13,
sumOfTotalAmount:462878

};

