import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {PersonalInfoEdit} from '../components/MyProfile/PersonalInfoEdit';

export default {
    title: 'Shop/PersonalInfoEdit',
    component: PersonalInfoEdit,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof PersonalInfoEdit>;

    // const Template: ComponentStory<typeof PersonalInfoEdit> = (args) => <PersonalInfoEdit {...args} />;
    // export const PersonalInfoEditOne = Template.bind({});
    // PersonalInfoEditOne.args = {
    //     title:'new'
    
    // };