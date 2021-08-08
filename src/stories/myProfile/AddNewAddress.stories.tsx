import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddNewAddress from '../components/MyProfile/AddNewAddress';

export default {
    title: 'Shop/AddNewAddress',
    component: AddNewAddress,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof AddNewAddress>;

    const Template: ComponentStory<typeof AddNewAddress> = (args) => <AddNewAddress {...args}/>;
    export const AddNewAddressOne = Template.bind({});
    AddNewAddressOne.args = {
    
    };