import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductDetails } from './ProductDetails';

export default {
    title: 'Shop/Product Details',
    component: ProductDetails,
} as ComponentMeta<typeof ProductDetails>;

const Template: ComponentStory<typeof ProductDetails> = (args) => <ProductDetails {...args} />;

export const Page = Template.bind({});
