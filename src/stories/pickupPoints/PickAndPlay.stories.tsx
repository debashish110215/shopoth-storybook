import { ComponentStory, ComponentMeta } from '@storybook/react';
import PickAndPay from '../components/pickupPoint/PickAndPay';

export default {
    title: 'Shop/PickAndPay',
    component: PickAndPay,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof PickAndPay>;

    const Template: ComponentStory<typeof PickAndPay> = () => <PickAndPay />;
    export const PickAndPayOne = Template.bind({});