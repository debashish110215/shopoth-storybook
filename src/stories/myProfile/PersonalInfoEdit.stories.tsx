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

    const Template: ComponentStory<typeof PersonalInfoEdit> = (args) => <PersonalInfoEdit {...args} />;
    export const PersonalInfoEditOne = Template.bind({});
    PersonalInfoEditOne.args = {
        userDetails:{
            fullName : 'Sayekat Chakraborty',
            email : 'SayekatChakraborty@gmil.com',
            phone : '+880 1926 569 236',
            gender : 'Male',
            dob : '12/02/1992',
        }
    };