import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Wishlist } from '../stories/components/Wishlist';

export default {
  title: 'Shop/Wishlist',
  component: Wishlist,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Wishlist>;

const Template: ComponentStory<typeof Wishlist> = (args) => <Wishlist {...args} />;

export const WishlistAdded = Template.bind({});
WishlistAdded.args = {
  isWishlistAdded:true
};
