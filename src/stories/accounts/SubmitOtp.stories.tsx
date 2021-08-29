import { ComponentStory, ComponentMeta } from '@storybook/react';
import SubmitOtp from '../components/accounts/SubmitOtp';

export default {
    title: 'Shop/SubmitOtp',
    component: SubmitOtp,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof SubmitOtp>;

    const Template: ComponentStory<typeof SubmitOtp> = () => <SubmitOtp />;
    export const SubmitOtpOne = Template.bind({});
  