import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Content from '../components/MyProfile/Content';

export default {
    title: 'Shop/Content',
    component: Content,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof Content>;

    // const Template: ComponentStory<typeof Content> = (args) => <Content {...args} />;
    // export const BadgeTitle = Template.bind({});
    // BadgeTitle.args = {
    //     title:'new'
    
    // };

