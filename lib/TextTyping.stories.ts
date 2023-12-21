import type { Meta, StoryObj } from '@storybook/react';

import { TextTyping, type ITextTypingProps } from './TextTyping';

const meta = {
  title: 'TextTyping',
  component: TextTyping,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof TextTyping>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: ITextTypingProps = {
  text: 'Hello World!',
};

export const DefaultTextTyping: Story = {
  args: {
    ...defaultProps,
  },
};

