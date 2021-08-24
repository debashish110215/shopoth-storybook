import { ComponentStory, ComponentMeta } from '@storybook/react';
import PaymentOption from '../components/pickupPoint/PaymentOption';

export default {
    title: 'Shop/PaymentOption',
    component: PaymentOption,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof PaymentOption>;

    const Template: ComponentStory<typeof PaymentOption> = (args) => <PaymentOption {...args} />;
    export const PaymentOptionOne = Template.bind({});