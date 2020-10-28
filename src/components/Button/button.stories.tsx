import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonType, ButtonSize, ButtonProps } from './button'

// 这是组件的标题
export default {
    title: 'Button 组件',
    component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// 这是Primary 类型的组件
export const Primary = Template.bind({});
Primary.args = {
    btnType: ButtonType.Primary,
    children: 'Primary'
};

// 这是Large Primary类型的组件
export const LargePrimary = Template.bind({});
LargePrimary.args = {
    btnType: ButtonType.Primary,
    children: 'Large Primary',
    size: ButtonSize.Large
};