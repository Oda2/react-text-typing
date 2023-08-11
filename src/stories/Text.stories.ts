import type { Meta, StoryObj } from '@storybook/react';
import { TextStorie } from './Text';

const meta = {
  title: 'Text Typing',
  component: TextStorie,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof TextStorie>;

export default meta;
type Story = StoryObj<typeof meta>;


export const TextExample: Story = {
  args: {
    text: 'Example Text',
    colorText: 'black',
    colorTyping: 'red',
    component: 'h1',
    showBlink: true,
    speed: 100,
    timeTyping: 1000,
  },
};

