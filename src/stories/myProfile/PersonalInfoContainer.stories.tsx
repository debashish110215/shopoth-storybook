import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PersonalInfoContainer from '../components/MyProfile/PersonalInfoContainer';

export default {
    title: 'Shop/PersonalInfoContainer',
    component: PersonalInfoContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof PersonalInfoContainer>;

    const Template: ComponentStory<typeof PersonalInfoContainer> = (args) => <PersonalInfoContainer {...args} />;
    export const PersonalInfoContainerOne = Template.bind({});
    PersonalInfoContainerOne.args = {
        userDetails:{
        userName : 'Sayekat Chakraborty',
        email : 'Sayekat Chakraborty@gmil.com',
        phone : '+880 1926 569 236',
        gender : 'Male',
        dob : '12/02/1992',
    },
    userAddress:[
        {addressName:'Home Address', addressLine:'23/2, Shah Paran', thana:'Kahalu', district:'Bogura'},
        {addressName:'Office Address', addressLine:'23/2, Shah Paran', thana:'Kahalu', district:'Bogura'}
    ]
    
    };