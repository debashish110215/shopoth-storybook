import { ComponentStory, ComponentMeta } from '@storybook/react';
import ForgetPassword from '../components/accounts/ForgetPassword';

export default {
    title: 'Shop/ForgetPassword',
    component: ForgetPassword,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof ForgetPassword>;

    const Template: ComponentStory<typeof ForgetPassword> = () => <ForgetPassword />;
    export const ForgetPasswordOne = Template.bind({});
  