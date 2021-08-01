import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChangePassword from '../components/MyProfile/ChangePassword';



export default {
    title: 'Shop/ChangePassword',
    component: ChangePassword,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof ChangePassword>;

    const Template: ComponentStory<typeof ChangePassword> = () => <ChangePassword/>;
    export const ChangePasswordOne = Template.bind({});
