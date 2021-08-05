import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ImageUpload from '../components/MyProfile/ImageUpload';

export default {
    title: 'Shop/ImageUpload',
    component: ImageUpload,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof ImageUpload>;

    const Template: ComponentStory<typeof ImageUpload> = (arg)=> <ImageUpload {...arg} />;
    export const ImageUploadOne = Template.bind({});
