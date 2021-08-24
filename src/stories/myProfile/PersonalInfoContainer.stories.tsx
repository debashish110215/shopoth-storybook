import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PersonalInfoContainer from '../components/MyProfile/PersonalInfoContainer';

export default {
    title: 'Shop/PersonalInfoContainer',
    component: PersonalInfoContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof PersonalInfoContainer>;

    const Template: ComponentStory<typeof PersonalInfoContainer> = (args) => <PersonalInfoContainer {...args} />;
    export const PersonalInfoContainerOne = Template.bind({});
    PersonalInfoContainerOne.args = {
    };