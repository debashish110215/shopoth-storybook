import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LocalStore } from './LocalStore';

export default {
  title: 'Shop/Local Store',
  component: LocalStore,
} as ComponentMeta<typeof LocalStore>;

const Template: ComponentStory<typeof LocalStore> = (args) => <LocalStore {...args} />;

export const Page = Template.bind({});
