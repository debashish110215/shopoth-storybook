import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MegaMenuDesktop, MenuState } from '../stories/components/Menu'

export default {
    title:'shop/Mega Menu',
    component: MegaMenuDesktop,
    argTypes: {
        backgroundColor:{control:'color'}
    },
} as ComponentMeta<typeof MegaMenuDesktop>

const Template:ComponentStory<typeof MegaMenuDesktop> = (args) =><MegaMenuDesktop {...args}/>

export const MegaMenu = Template.bind({});
MegaMenu.args = {
    menuState:MenuState.OPEN,
    primaryMenu : {
        title : "Categories",
        categories : [
            {
                title : "Phone ",
                bnTitle: "Phone",
                id : "1",
                subCategory: [
                    {
                        title : "Phone 1",
                        bnTitle: "Phone",
                        id : "1",
                        subCategory: []
                    },
                    {
                        title : "Phone 2",
                        bnTitle: "Phone",
                        id : "1",
                        subCategory: []
                    },
                    {
                        title : "Phone 3",
                        bnTitle: "Phone",
                        id : "1",
                        subCategory: []
                    },
                    {
                        title : "Phone 4",
                        bnTitle: "Phone",
                        id : "1",
                        subCategory: []
                    }
                ]
            },
            {
                title : "Phone 2",
                bnTitle: "Phone",
                id : "2",
                subCategory: [
                    {
                        title : "Phone 21",
                        bnTitle: "Phone",
                        id : "1",
                        subCategory: []
                    },
                    {
                        title : "Phone 22",
                        bnTitle: "Phone",
                        id : "1",
                        subCategory: []
                    },
                    {
                        title : "Phone 23",
                        bnTitle: "Phone",
                        id : "1",
                        subCategory: []
                    },
                    {
                        title : "Phone 24",
                        bnTitle: "Phone",
                        id : "1",
                        subCategory: []
                    }
                ]
            }
        ]
    }
};