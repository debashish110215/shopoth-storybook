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
    id:1,
    userId:'025462',
    userName:'Cameron Williamson',
    userImgUrl:'./pro_img.png',
    accountCreationDate:'2021'
};

