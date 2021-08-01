import { ComponentStory, ComponentMeta } from '@storybook/react';
import {SidebarTop } from '../components/MyProfile/SidebarTop';

export default {
    title: 'Shop/SidebarTop',
    component: SidebarTop,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof SidebarTop>;

const Template: ComponentStory<typeof SidebarTop> = (args) => <SidebarTop {...args} />;
export const SidebarTopOne = Template.bind({});
SidebarTopOne.args = {
    userName:'Cameron Williamson',
    userImgUrl:'./pro_img.png',
    userId:'025462',
    accountCreationDate:'2021'
};

