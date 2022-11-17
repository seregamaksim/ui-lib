import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import './Button.module.scss';

export default {
  title: 'Button',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Тестовая кнопка',
};
