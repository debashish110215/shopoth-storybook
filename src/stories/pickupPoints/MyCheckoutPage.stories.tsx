import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyCheckoutPage from '../components/pickupPoint/MyCheckoutPage';

export default {
    title: 'Shop/MyCheckoutPage',
    component: MyCheckoutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof MyCheckoutPage>;

    const Template: ComponentStory<typeof MyCheckoutPage> = () => <MyCheckoutPage />;
    export const MyCheckoutPageOne = Template.bind({});
