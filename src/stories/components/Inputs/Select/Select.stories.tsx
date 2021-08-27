import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select as SelectField } from './Select';

export default {
  title: 'Shop/Inputs',
  component: SelectField,
} as ComponentMeta<typeof SelectField>;

const Template: ComponentStory<typeof SelectField> = (args) => <SelectField {...args} />;

export const Select = Template.bind({});