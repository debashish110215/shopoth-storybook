import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {HeaderCartIcon} from './components/HeaderCartIcon';


export default {
    title: 'Shop/HeaderCartIcon',
    component: HeaderCartIcon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderCartIcon>;

const Template: ComponentStory<typeof HeaderCartIcon> = (args) => <HeaderCartIcon {...args} />;

export const HeaderCartIconOne = Template.bind({});
HeaderCartIconOne.args = {
    cartItemCount:15,
    itemTotalAmount:1000
};
