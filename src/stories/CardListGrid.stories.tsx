import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardListGrid from './components/CardListGrid';

export default {
  title: 'Shop/CardListGrid',
  component: CardListGrid,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CardListGrid>;

const Template: ComponentStory<typeof CardListGrid> = (args) => <CardListGrid {...args} />;

export const CardListGridOne = Template.bind({});
CardListGridOne.args = {
    title:'50% Discount',
    // CardListGridImage:'sum2.jpg',
    // productTitle:'Sumsung Galaxy S52s -Silver color', 
};

