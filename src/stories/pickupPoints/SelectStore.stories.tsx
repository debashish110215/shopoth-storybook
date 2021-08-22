import { ComponentStory, ComponentMeta } from '@storybook/react';
import SelectStore from '../components/pickupPoint/SelectStore';

export default {
    title: 'Shop/SelectStore',
    component: SelectStore,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof SelectStore>;

    const Template: ComponentStory<typeof SelectStore> = () => <SelectStore />;
    export const SelectStoreOne = Template.bind({});
