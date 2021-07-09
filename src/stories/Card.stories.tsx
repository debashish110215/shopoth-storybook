import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './components/Card';

export default {
  title: 'Shop/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardOne = Template.bind({});
CardOne.args = {
    badgeTitle:'50% Discount',
    cardImage:'sum2.jpg',
    productTitle:'Sumsung Galaxy S52s -Silver color', 
};

