import { ComponentStory, ComponentMeta } from '@storybook/react';

import {FooterSocialLink} from './components/FooterSocialLink';

export default {
  title: 'Shop/FooterSocialLink',
  component: FooterSocialLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FooterSocialLink>;

const Template: ComponentStory<typeof FooterSocialLink> = (args) => <FooterSocialLink {...args} />;

export const FooterSocialLinkOne = Template.bind({});
FooterSocialLinkOne.args = {
  
};

