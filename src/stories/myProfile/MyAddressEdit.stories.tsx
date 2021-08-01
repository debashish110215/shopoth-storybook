import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {MyAddressEdit} from '../components/MyProfile/MyAddressEdit';

export default {
    title: 'Shop/MyAddressEdit',
    component: MyAddressEdit,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof MyAddressEdit>;

    // const Template: ComponentStory<typeof MyAddressEdit> = (args) => <MyAddressEdit {...args} />;
    // export const MyAddressEditOne = Template.bind({});
    // MyAddressEditOne.args = {
    //     title:'new'
    
    // };