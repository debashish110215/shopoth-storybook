import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyProfilePage from '../components/MyProfile/MyProfilePage';

export default {
    title: 'Shop/MyProfilePage',
    component: MyProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof MyProfilePage>;

    const Template: ComponentStory<typeof MyProfilePage> = (args) => <MyProfilePage />;
    export const MyProfilePageOne = Template.bind({});
    MyProfilePageOne.args = {
    
    };