import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {OurBrands} from './components/OurBrands';

export default {
  title: 'Shop/OurBrands',
  component: OurBrands,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof OurBrands>;

const Template: ComponentStory<typeof OurBrands> = (args) => <OurBrands {...args} />;

export const OurBrandsOne = Template.bind({});
OurBrandsOne.args = {
    
};

