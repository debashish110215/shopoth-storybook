import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {MyAddress} from '../components/MyProfile/MyAddress';

export default {
    title: 'Shop/MyAddress',
    component: MyAddress,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof MyAddress>;

    const Template: ComponentStory<typeof MyAddress> = (args) => <MyAddress {...args} />;
    export const MyAddressOne = Template.bind({});
    MyAddressOne.args = {
        userAddress:[
            {addressName:'Home Address', addressLine:'23/2, Shah Paran', thana:'Kahalu', district:'Bogura'},
            {addressName:'Office Address', addressLine:'23/2, Shah Paran', thana:'Kahalu', district:'Bogura'}
        ]
    
    };