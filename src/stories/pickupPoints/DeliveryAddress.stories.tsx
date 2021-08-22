import { ComponentStory, ComponentMeta } from '@storybook/react';
import DeliveryAddress from '../components/pickupPoint/DeliveryAddress';

export default {
    title: 'Shop/DeliveryAddress',
    component: DeliveryAddress,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof DeliveryAddress>;

    const Template: ComponentStory<typeof DeliveryAddress> = () => <DeliveryAddress />;
    export const DeliveryAddressOne = Template.bind({});