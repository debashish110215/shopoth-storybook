import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {PersonalInfo} from '../components/MyProfile/PersonalInfo';

export default {
    title: 'Shop/PersonalInfo',
    component: PersonalInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof PersonalInfo>;

    const Template: ComponentStory<typeof PersonalInfo> = (args) => <PersonalInfo {...args} />;
    export const PersonalInfoOne = Template.bind({});
    PersonalInfoOne.args = {
        userDetails :{
            id:1,
            userId:'025462',
            userName:'Cameron Williamson',
            email : 'SayekatChakraborty@gmil.com',
            phone : '+880 1926 569 236',
            gender : 'Male',
            dob : '12/02/1992',
            userImgUrl:'./pro_img.png',
            accountCreationDate:'2021',
        }
    };