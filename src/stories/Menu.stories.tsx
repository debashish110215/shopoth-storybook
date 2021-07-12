import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FaHireAHelper } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import { WrapperMegaMenu, MenuState } from '../stories/components/Menu'

export default {
    title:'shop/Mega Menu',
    component: WrapperMegaMenu,
    argTypes: {
        backgroundColor:{control:'color'}
    },
} as ComponentMeta<typeof WrapperMegaMenu>

const Template:ComponentStory<typeof WrapperMegaMenu> = (args) =><WrapperMegaMenu {...args}/>

export const MegaMenu = Template.bind({});
MegaMenu.args = {
    customerServices: {
        title : "Categories",
        categories : [
            {
                icon : <FaHireAHelper/>,
                title : "Phone ",
                bnTitle: "Phone",
                id : "33",
                subCategory:[
                    {
                        title : "Phone 33",
                        bnTitle: "Phone",
                        id : "1",
                        subCategory: []
                    }
                ]
            }
        ]
    },
    secondaryMenu: { 
        title : "Shopoth.com",
        categories : [
            {
                icon : <FaHireAHelper/>,
                title : "Phone ",
                bnTitle: "Phone",
                id : "44",
                subCategory:[
                    {
                        title : "Phone 44",
                        bnTitle: "Phone",
                        id : "1",
                        subCategory: []
                    }
                ]
            },
            {
                icon : <FaHireAHelper/>,
                title : "Phone ",
                bnTitle: "Phone",
                id : "45",
                subCategory:[
                    {
                        title : "Phone 44",
                        bnTitle: "Phone",
                        id : "1",
                        subCategory: []
                    }
                ]
            },
            {
                icon : <FaHireAHelper/>,
                title : "Phone ",
                bnTitle: "Phone",
                id : "46",
                subCategory:[
                    {
                        title : "Phone 44",
                        bnTitle: "Phone",
                        id : "1",
                        subCategory: []
                    }
                ]
            }
        ]
    },
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
            },
            {
                title : "Phone 3",
                bnTitle: "Phone",
                id : "3",
                subCategory: [ ]
            }
        ]
    }
};