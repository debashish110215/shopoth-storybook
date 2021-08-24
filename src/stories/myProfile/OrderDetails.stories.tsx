import { ComponentStory, ComponentMeta } from '@storybook/react';
import OrderDetails from '../components/MyProfile/OrderDetails';

export default {
    title: 'Shop/OrderDetails',
    component: OrderDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof OrderDetails>;

    const Template: ComponentStory<typeof OrderDetails> = (args) => <OrderDetails {...args} />;
    export const OrderDetailsOne = Template.bind({});
    OrderDetailsOne.args = {
       
    };

    

