import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkout from '../components/pickupPoint/Checkout';

export default {
    title: 'Shop/Checkout',
    component: Checkout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof Checkout>;

    const Template: ComponentStory<typeof Checkout> = (args) => <Checkout {...args}/>;
    export const CheckoutOne = Template.bind({});
