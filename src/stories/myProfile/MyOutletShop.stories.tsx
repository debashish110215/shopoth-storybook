import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyOutletShop from '../components/MyProfile/MyOutletShop';

export default {
    title: 'Shop/MyOutletShop',
    component: MyOutletShop,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof MyOutletShop>;

    const Template: ComponentStory<typeof MyOutletShop> = (args) => <MyOutletShop {...args} />;
    export const MyOutletShopOne = Template.bind({});
    MyOutletShopOne.args = {
        outletList:[
            { 
                outletId:125635, 
                name:'Zamal Store', 
                address:'Amborkhna Bus stand', 
                district:'Bogura', 
                ownerName:'Md. Zamal Hossain', 
                phone:'01725 569 652'
            },
            { 
                outletId:125635, 
                name:'Zamal Store', 
                address:'Amborkhna Bus stand', 
                district:'Bogura', 
                ownerName:'Md. Zamal Hossain', 
                phone:'01725 569 652'
            },
            { 
                outletId:125635, 
                name:'Zamal Store', 
                address:'Amborkhna Bus stand', 
                district:'Bogura', 
                ownerName:'Md. Zamal Hossain', 
                phone:'01725 569 652'
            },
        ]
    
    };