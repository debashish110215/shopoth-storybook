import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Price} from './Price';

export default {
  title: 'Shop/Price',
  component: Price,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Price>;

const Template: ComponentStory<typeof Price> = (args) => <Price {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    currentPrice:'5700',
    regularPrice:'6200',
    color: 'primary',
    size:1.5
  
};


