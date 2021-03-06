import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from '../stories/components/Image';

export default {
  title: 'Shop/Image',
  component: Image,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const CardImage = Template.bind({});
CardImage.args = {
    title:'new',
    imageUrl:'shoes_480X480.png'
 
};

