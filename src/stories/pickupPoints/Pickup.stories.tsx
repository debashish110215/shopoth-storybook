import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pickup from '../components/pickupPoint/Pickup';

export default {
    title: 'Shop/Pickup',
    component: Pickup,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof Pickup>;

    const Template: ComponentStory<typeof Pickup> = () => <Pickup />;
    export const PickupOne = Template.bind({});