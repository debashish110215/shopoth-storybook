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
      
    };

    

