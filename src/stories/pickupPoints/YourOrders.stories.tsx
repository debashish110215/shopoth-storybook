import { ComponentStory, ComponentMeta } from '@storybook/react';
import YourOrders from '../components/pickupPoint/YourOrders';

export default {
    title: 'Shop/YourOrders',
    component: YourOrders,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof YourOrders>;

    const Template: ComponentStory<typeof YourOrders> = () => <YourOrders />;
    export const YourOrdersOne = Template.bind({});