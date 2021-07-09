import { ComponentStory, ComponentMeta } from '@storybook/react'
import { OverLay } from './Overlay'

export default {
    title:'shop/Overlay',
    component: OverLay,
    argTypes: {
        backgroundColor:{control:'color'}
    },
} as ComponentMeta<typeof OverLay>

const Template:ComponentStory<typeof OverLay> = (args) =><OverLay {...args}/>

export const BlankOverlay = Template.bind({});
BlankOverlay.args = {
    onClose: () => {},
    children: <></>,
    show: true
  
};