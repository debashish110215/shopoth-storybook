import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LocalStoreRatings } from './LocalStoreRatings';

export default {
  title: 'Shop/Local Store Ratings',
  component: LocalStoreRatings,
} as ComponentMeta<typeof LocalStoreRatings>;

const Template: ComponentStory<typeof LocalStoreRatings> = (args) => <LocalStoreRatings {...args} />;

export const Page = Template.bind({});
