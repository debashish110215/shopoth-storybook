import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Filter from './components/Filter';

export default {
  title: 'Shop/Filter',
  component: Filter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

export const FilterOne = Template.bind({});
FilterOne.args = {

};

