import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Overlay } from '../stories/components/Overlay'

export default {
    title:'shop/Overlay',
    component: Overlay,
    argTypes: {
        backgroundColor:{control:'color'}
    },
} as ComponentMeta<typeof Overlay>

const Template:ComponentStory<typeof Overlay> = (args) =><Overlay {...args}/>

export const BlankOverlay = Template.bind({});
BlankOverlay.args = {
    onClose: () => {},
    children: <></>,
    show: true,
    allowScroll: true
};
export const OverlayWithElement = Template.bind({});
const abc =
    <>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
        <br/>
        <h1>Hello</h1>
    </>

OverlayWithElement.args = {
    onClose: () => {},
    children: abc,
    show: true,
    allowScroll: false
};
