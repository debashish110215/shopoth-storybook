import { ComponentStory, ComponentMeta } from '@storybook/react';
import ResetPassword from '../components/accounts/ResetPassword';

export default {
    title: 'Shop/ResetPassword',
    component: ResetPassword,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof ResetPassword>;

    const Template: ComponentStory<typeof ResetPassword> = () => <ResetPassword />;
    export const ResetPasswordOne = Template.bind({});
  