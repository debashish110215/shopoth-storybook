import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './components/Footer';

export default {
  title: 'Shop/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const FooterOne = Template.bind({});
FooterOne.args = {
};

