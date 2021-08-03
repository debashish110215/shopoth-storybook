import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyOrderContainer from '../components/MyProfile/MyOrderContainer';

export default {
    title: 'Shop/MyOrderContainer',
    component: MyOrderContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof MyOrderContainer>;

    const Template: ComponentStory<typeof MyOrderContainer> = (args) => <MyOrderContainer {...args} />;
    export const MyOrderContainerOne = Template.bind({});
    MyOrderContainerOne.args = {
        orderList:[
            { 
                id:1,
                orderId:'125874',
                amount:3500,
                status:'in_progress',
                dateTime:'12-06-21, 10.21'
            },
            { 
                id:2,
                orderId:'125874',
                amount:3500,
                status:'completed',
                dateTime:'12-06-21, 10.21',
                returnDate:'30-07-21'
            },
            { 
                id:3,
                orderId:'125874',
                amount:3500,
                status:'in_progress',
                dateTime:'12-06-21, 10.21'
            },
            { 
                id:4,
                orderId:'125874',
                amount:3500,
                status:'in_progress',
                dateTime:'12-06-21, 10.21'
            },
            { 
                id:5,
                orderId:'125874',
                amount:3500,
                status:'cancelled',
                dateTime:'12-06-21, 10.21'
            },
            { 
                id:6,
                orderId:'125874',
                amount:3500,
                status:'completed',
                dateTime:'12-06-21, 10.21',
                returnDate:'30-07-21'
            },
            { 
                id:7,
                orderId:'125874',
                amount:3500,
                status:'return',
                dateTime:'12-06-21, 10.21'
            },
            { 
                id:8,
                orderId:'125874',
                amount:3500,
                status:'past_purchase',
                dateTime:'12-06-21, 10.21'
            },
            { 
                id:9,
                orderId:'125874',
                amount:3500,
                status:'return',
                dateTime:'12-06-21, 10.21'
            },
            { 
                id:10,
                orderId:'125874',
                amount:3500,
                status:'past_purchase',
                dateTime:'12-06-21, 10.21'
            },
        ]
    
    };

    

