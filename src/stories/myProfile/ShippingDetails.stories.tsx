import { ComponentStory, ComponentMeta } from '@storybook/react';
import {MyOrders} from '../components/MyProfile/MyOrders';

export default {
    title: 'Shop/MyOrder',
    component: MyOrders,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof MyOrders>;

    const Template: ComponentStory<typeof MyOrders> = (args) => <MyOrders {...args} />;
    export const MyOrderOne = Template.bind({});
    MyOrderOne.args = {
       
    };

    

