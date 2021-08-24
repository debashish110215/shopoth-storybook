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
      
    };

    

