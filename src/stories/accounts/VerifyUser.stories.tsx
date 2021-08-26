import { ComponentStory, ComponentMeta } from '@storybook/react';
import VerifyUser from '../components/accounts/VerifyUser';

export default {
    title: 'Shop/VerifyUser',
    component: VerifyUser,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof VerifyUser>;

    const Template: ComponentStory<typeof VerifyUser> = () => <VerifyUser />;
    export const VerifyUserOne = Template.bind({});
  