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
      
    
    };

    

