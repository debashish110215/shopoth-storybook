import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Sidebar from '../components/MyProfile/Sidebar';

export default {
    title: 'Shop/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;
export const SidebarOne = Template.bind({});
SidebarOne.args = {
    userDetails:{
        id:1,
        userId:'025462',
        userName:'Cameron Williamson',
        email : 'Sayekat Chakraborty@gmil.com',
        phone : '+880 1926 569 236',
        gender : 'Male',
        dob : '12/02/1992',
        userImgUrl:'./pro_img.png',
        accountCreationDate:'2021',
    }
};

