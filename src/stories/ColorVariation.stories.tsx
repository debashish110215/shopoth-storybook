import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ColorVariation } from './components/ColorVariation';

export default {
  title: 'Shop/ColorVariation',
  component: ColorVariation,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ColorVariation>;

const Template: ComponentStory<typeof ColorVariation> = (args) => <ColorVariation {...args} />;

export const CardColorVariation = Template.bind({});
CardColorVariation.args = {
   
};

