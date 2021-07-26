import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './components/Card';
import ProductCard from './components/ProductCard';

export default {
  title: 'Shop/Card',
  component: ProductCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />;

export const CardOne = Template.bind({});
CardOne.args = {
    badgeTitle:'50% Discount',
    cardImage:'sum2.jpg',
    productTitle:'Sumsung Galaxy S52s -Silver color', 
};

