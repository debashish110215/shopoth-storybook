import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchStore from '../components/pickupPoint/SearchStore';

export default {
    title: 'Shop/SearchStore',
    component: SearchStore,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    } as ComponentMeta<typeof SearchStore>;

    const Template: ComponentStory<typeof SearchStore> = () => <SearchStore />;
    export const SearchStoreOne = Template.bind({});