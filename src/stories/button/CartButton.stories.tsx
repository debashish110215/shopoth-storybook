import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CartButton, CartButtonState } from './CartButton'

export default {
    title:'shop/CartButton',
    component:CartButton,
    argTypes:{
        backgroundColor:{control:'color'}
    },
} as ComponentMeta<typeof CartButton>

const Template:ComponentStory<typeof CartButton> = (args) =><CartButton {...args}/>

export const Primary = Template.bind({})
Primary.args = {
   color:'primary',
    label:'Button'
}

export const Secondary = Template.bind({});
Secondary.args = {
  color:'secondary',
  label: 'Button',
};
export const Success = Template.bind({});
Success.args = {
  color:'success',
  label: 'Button',
  state: CartButtonState.LOADING,
  loaderColor:'dark'
};
export const Info = Template.bind({});
Info.args = {
  color:'info',
  label: 'Button',
};
export const Warning = Template.bind({});
Warning.args = {
  color:'warning',
  label: 'Button',
};
export const Danger = Template.bind({});
Danger.args = {
  color:'danger',
  label: 'Button',
};
export const Cart = Template.bind({});
Cart.args = {
  color:'cart',
  label: 'Button',
};

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  color:'primary',
  outline:true,
  label: 'Button',
};
export const OutlineSecondary = Template.bind({});
OutlineSecondary.args = {
  color:'secondary',
  outline:true,
  label: 'Button',
};
export const OutlineSuccess = Template.bind({});
OutlineSuccess.args = {
  color:'success',
  outline:true,
  label: 'Button',
};
export const OutlineInfo = Template.bind({});
OutlineInfo.args = {
  color:'info',
  outline:true,
  label: 'Button',
};
export const OutlineWarning = Template.bind({});
OutlineWarning.args = {
  color:'warning',
  outline:true,
  label: 'Button',
};
export const OutlineDanger = Template.bind({});
OutlineDanger.args = {
  color:'danger',
  outline:true,
  label: 'Button',
};
export const OutlineCart = Template.bind({});
OutlineCart.args = {
  color:'cart',
  outline:true,
  label: 'Button',
};
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Block = Template.bind({})
Block.args = {
    block:'block',
    label:'Button'
}


export const Hidden = Template.bind({})
Block.args = {
    block:'block',
    label:'Button',
    state: CartButtonState.HIDDEN
}