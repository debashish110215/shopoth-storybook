import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {AllRightReserved} from './components/AllRightReserved';

export default {
  title: 'Shop/AllRightReserved',
  component: AllRightReserved,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AllRightReserved>;

const Template: ComponentStory<typeof AllRightReserved> = (args) => <AllRightReserved {...args} />;

export const AllRightReservedOne = Template.bind({});
AllRightReservedOne.args = {

};

