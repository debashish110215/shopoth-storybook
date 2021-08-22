import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReturnOrderStepOne from '../components/MyProfile/ReturnOrderStepOne';

export default {
    title: 'Shop/ReturnOrderStepOne',
    component: ReturnOrderStepOne,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof ReturnOrderStepOne>;

    const Template: ComponentStory<typeof ReturnOrderStepOne> = (args) => <ReturnOrderStepOne {...args} />;
    export const ReturnOrderStepOneCom = Template.bind({});
    ReturnOrderStepOneCom.args = {
        orderId:'125874',
        orderedProductList:[
            { 
                id:1,
                imgUrl:'./shopoth/images/png/p3.png', 
                productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
                quantury:2,
                amount:3500,
                status:'completed',
                dateTime:'12-06-21, 10.21',
                deliveryId:'1256487',
            },
            { 
                id:2,
                imgUrl:'./shopoth/images/png/download.png', 
                productTitle:'Asus RT-AC1200 V2 Dual-Band Wifi Wireless Router', 
                quantury:1,
                amount:3500,
                status:'completed',
                dateTime:'12-06-21, 10.21',
                deliveryId:'1256487',
            },
            { 
                id:3,
                imgUrl:'./shopoth/images/png/G03.jpg', 
                productTitle:'Body Lotion for Dry Skin', 
                quantury:5,
                amount:3500,
                status:'completed',
                dateTime:'12-06-21, 10.21',
                deliveryId:'1256487',
            },
            
        ],
    
    };

    

