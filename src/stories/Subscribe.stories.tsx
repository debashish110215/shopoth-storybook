import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Subscribe } from './components/Subscribe';

export default {
  title: 'Shop/Subscribe',
  component: Subscribe,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Subscribe>;

const Template: ComponentStory<typeof Subscribe> = (args) => <Subscribe {...args} />;

export const SubscribeBtn = Template.bind({});
SubscribeBtn.args = {
 show:true
};

