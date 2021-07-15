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

categoryList:[
  {id:1, title:'Fashion'},
  {id:2, title:'Phone & Accesssories'},
  {id:3, title:'Electronics & Gadgets'},
  {id:4, title:'Health & Hygiene'},
  {id:5, title:'Personal Care'},
  {id:6, title:'Snacks & Beverrages'},
  {id:7, title:'Special Groceries'},
  {id:8, title:'Special Needs'},
  {id:9, title:'Baby Care'},
  {id:10,title:'Others'}, 
]
};

