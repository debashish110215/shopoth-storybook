import { ComponentStory, ComponentMeta } from '@storybook/react';
import SignUp from '../components/accounts/SignUp';

export default {
    title: 'Shop/SignUp',
    component: SignUp,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof SignUp>;

    const Template: ComponentStory<typeof SignUp> = () => <SignUp />;
    export const SignUpOne = Template.bind({});