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
    text: { control: 'text' },
    colorText: { control: 'color' },
    colorTyping: { control: 'color' },
    showBlink: { control: 'boolean' },
    speed: { control: { type: 'number', min: 10, max: 2000, step: 10 } },
    timeTyping: { control: { type: 'number', min: 1, max: 20 } },
    fontSize: { control: 'text' },
  },
} satisfies Meta<typeof TextTyping>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: ITextTypingProps = {
  text: 'Hello World!',
  speed: 150,
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};

export const CustomColors: Story = {
  args: {
    ...defaultProps,
    colorText: '#ff6b6b',
    colorTyping: '#4ecdc4',
  },
};

export const NoBlink: Story = {
  args: {
    ...defaultProps,
    showBlink: false,
  },
};

export const CustomSpeed: Story = {
  args: {
    ...defaultProps,
    speed: 50,
  },
};

export const CustomFontSize: Story = {
  args: {
    ...defaultProps,
    fontSize: '3em',
  },
};

export const ShortText: Story = {
  args: {
    text: 'Hi!',
    speed: 200,
  },
};

export const LongText: Story = {
  args: {
    text: 'This is a longer text to demonstrate the typing animation effect.',
    speed: 100,
  },
};

export const WithOnComplete: Story = {
  args: {
    ...defaultProps,
    onComplete: () => console.log('Typing complete!'),
  },
};
