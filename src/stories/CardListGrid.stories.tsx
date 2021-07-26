import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductsGrid from './components/ProductsGrid';

export default {
  title: 'Shop/CardListGrid',
  component: ProductsGrid,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProductsGrid>;

const Template: ComponentStory<typeof ProductsGrid> = (args) => <ProductsGrid {...args} />;

export const CardListGridOne = Template.bind({});
CardListGridOne.args = {
  clsName:'products-grid-cols-5'
};


export const CardListGridTwo = Template.bind({});
CardListGridTwo.args = {
  clsName:'products-grid-cols-4'
};
