import { ComponentStory, ComponentMeta } from '@storybook/react';
import {FilterProductList} from './components/FilterProductList';

export default {
  title: 'Shop/FilterProductList',
  component: FilterProductList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FilterProductList>;

const Template: ComponentStory<typeof FilterProductList> = (args) => <FilterProductList {...args} />;

export const FilterProductListOne = Template.bind({});
FilterProductListOne.args = {
   
};

