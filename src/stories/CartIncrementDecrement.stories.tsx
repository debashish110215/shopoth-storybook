import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {CartIncrementDecrement} from './components/CartIncrementDecrement';

export default {
    title: 'Shop/CartIncrementDecrement',
    component: CartIncrementDecrement,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof CartIncrementDecrement>;

    const Template: ComponentStory<typeof CartIncrementDecrement> = (args) => <CartIncrementDecrement {...args} />;

    export const CartIncrementDecrementOne = Template.bind({});
    CartIncrementDecrementOne.args = {
    productCount:82 ,
    productPrice:3500,
    countTotalPrice:7000
};

