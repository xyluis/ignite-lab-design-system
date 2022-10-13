import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
