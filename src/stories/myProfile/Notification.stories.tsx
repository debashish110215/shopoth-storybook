import { ComponentStory, ComponentMeta } from '@storybook/react';
import NotificationMsg from '../components/MyProfile/NotificationMsg';

export default {
    title: 'Shop/NotificationMsg',
    component: NotificationMsg,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof NotificationMsg>;

    const Template: ComponentStory<typeof NotificationMsg> = (args) => <NotificationMsg {...args} />;
    export const NotificationMsgOne = Template.bind({});
    NotificationMsgOne.args = {
        notificationList:[
            { 
                id:1,
                title:'Did you enjoy your shopping experience?',
                key:'question',
                status:'completed',
                orderId:'2015MXQ62',
                oderDate:'20/07/2021'
            },
            { 
                id:2,
                title:'Cancellation Request Accepted',
                key:'cancel',
                status:'canceled',
                orderId:'2015MXQ62',
                oderDate:'20/07/2021'
            },
            { 
                id:3,
                title:'Confirm Recipet',
                key:'confirm',
                status:'completed',
                orderId:'2015MXQ62',
                oderDate:'20/07/2021'
            },
        ]
    
    };

    

