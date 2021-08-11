import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReturnOrderSetpTwo from '../components/MyProfile/ReturnOrderStepTwo';

export default {
    title: 'Shop/ReturnOrderSetpTwo',
    component: ReturnOrderSetpTwo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof ReturnOrderSetpTwo>;

    const Template: ComponentStory<typeof ReturnOrderSetpTwo> = (args) => <ReturnOrderSetpTwo {...args} />;
    export const ReturnOrderSetpTwoCom = Template.bind({});
    ReturnOrderSetpTwoCom.args = {
        returnProductDetails:
            { 
                returnId:'125874',
                imgUrl:'./shopoth/images/png/p3.png', 
                productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
                quantury:2,
                amount:3500,
                status:'completed',
                dateTime:'12-06-21, 10.21',
                deliveryId:'1256487',
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

    

