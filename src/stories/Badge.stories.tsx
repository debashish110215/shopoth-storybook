import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge } from './components/Badge';

export default {
  title: 'Shop/Badge',
  component: Badge,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const BadgeTitle = Template.bind({});
BadgeTitle.args = {
    title:'new'
 
};

