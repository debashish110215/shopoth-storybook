import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {FooterShopothInfo} from './components/FooterShopothInfo';

export default {
  title: 'Shop/FooterShopothInfo',
  component: FooterShopothInfo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FooterShopothInfo>;

const Template: ComponentStory<typeof FooterShopothInfo> = (args) => <FooterShopothInfo {...args} />;

export const FooterShopothInfoOne = Template.bind({});
FooterShopothInfoOne.args = {
  
};

