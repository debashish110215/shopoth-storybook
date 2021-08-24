import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyOrderContainer from '../components/MyProfile/MyOrdersContainer';

export default {
    title: 'Shop/MyOrderContainer',
    component: MyOrderContainer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof MyOrderContainer>;

    const Template: ComponentStory<typeof MyOrderContainer> = () => <MyOrderContainer  />;
    export const MyOrderContainerOne = Template.bind({});
    MyOrderContainerOne.args = {
       
    };

    

