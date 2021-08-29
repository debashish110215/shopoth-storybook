import { ComponentStory, ComponentMeta } from '@storybook/react';
import SignIn from '../components/accounts/SignIn';

export default {
    title: 'Shop/SignIn',
    component: SignIn,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof SignIn>;

    const Template: ComponentStory<typeof SignIn> = () => <SignIn />;
    export const SignInOne = Template.bind({});
  