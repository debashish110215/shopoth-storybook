import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {FilterCategoryList} from './components/FilterCategoryList';

export default {
  title: 'Shop/FilterCategoryList',
  component: FilterCategoryList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FilterCategoryList>;

const Template: ComponentStory<typeof FilterCategoryList> = (args) => <FilterCategoryList {...args} />;

export const FilterCategoryListOne = Template.bind({});
FilterCategoryListOne.args = {

};

