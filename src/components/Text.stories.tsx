import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Title',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam esse iste porro aut dicta molestiae, autem explicabo nesciunt voluptates unde vero animi tenetur repudiandae officia mollitia quam amet numquam?',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>This is one Children</p>
    )
  },
  argTypes: {
    children: {
      control: false
    },
    asChild: {
      control: false
    }
  }
}