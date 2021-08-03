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
        paymentsummary:{
            trxId : '8F35WI0Y51',
            payment_key:'bikash'
        },
        shippingDetails:{
            recipentName:'Md.Mizanur Rahman',
            phone:'01521120115',
            address:
                {
                    addressName:'Home Address', 
                    addressLine:'23/2, Shah Paran', 
                    thana:'Kahalu', 
                    district:'Bogura'
                },
            
        }
    
    };

    

