import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Rating } from '../stories/components/Rating';

export default {
  title: 'Shop/Rating',
  component: Rating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const CardRating = Template.bind({});
CardRating.args = {
   
};

