import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {MyOutletShopDetails} from '../components/MyProfile/MyOutletShopDetails';

export default {
    title: 'Shop/MyOutletShopDetails',
    component: MyOutletShopDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof MyOutletShopDetails>;

    const Template: ComponentStory<typeof MyOutletShopDetails> = (args) => <MyOutletShopDetails {...args} />;
    export const MyOutletShopDetailsOne = Template.bind({});
    MyOutletShopDetailsOne.args = {
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