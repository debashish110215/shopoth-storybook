import { ComponentStory, ComponentMeta } from '@storybook/react';
import Voucher from '../components/pickupPoint/Voucher';

export default {
    title: 'Shop/Voucher',
    component: Voucher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof Voucher>;

    const Template: ComponentStory<typeof Voucher> = () => <Voucher />;
    export const VoucherOne = Template.bind({});