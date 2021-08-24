import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import YourFavourit from '../components/MyProfile/YourFavourit';

export default {
    title: 'Shop/YourFavourit',
    component: YourFavourit,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof YourFavourit>;

    const Template: ComponentStory<typeof YourFavourit> = () => <YourFavourit  />;
    export const YourFavouritOne = Template.bind({});
    YourFavouritOne.args = {
        favouriteProductList:[
            { 
                id:1,
                imgUrl:'./shopoth/images/png/p3.png', 
                productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
                price:3500 
            },
            {   id:2,
                imgUrl:'./shopoth/images/png/download.png', 
                productTitle:'Asus RT-AC1200 V2 Dual-Band Wifi Wireless Router', 
                price:3500 
            },
            {   id:3,
                imgUrl:'./shopoth/images/png/G03.jpg', 
                productTitle:'Body Lotion for Dry Skin', 
                price:3500 
            },
        ]
    
    };