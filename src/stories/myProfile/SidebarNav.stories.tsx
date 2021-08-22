import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SidebarNav } from '../components/MyProfile/SidebarNav';

export default {
    title: 'Shop/SidebarNav',
    component: SidebarNav,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof SidebarNav>;

const Template: ComponentStory<typeof SidebarNav> = (args) => <SidebarNav {...args} />;
export const SidebarNavOne = Template.bind({});
SidebarNavOne.args = {
    id:2
};

