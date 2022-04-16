import React from 'react';
import { screen, render, cleanup, getByText, waitFor } from '@testing-library/react';
import TextTyping from './TextTyping';

describe('TextTyping Component', () => {
  it('should render component', async () => {
    const text = 'rice';
    createComponent({ text });
    await waitFor(() => screen.getByText(text));
    expect(screen.getByText(text)).toBeDefined();
  });

  it('should render component with not show blink', async () => {
    const text = 'rice';
    createComponent({ showBlink: false, text });
    await waitFor(() => screen.getByText(text));
    expect(screen.getByText(text)).toBeDefined();
  });
});

function createComponent(props = {}) {
  const defaultProps = {
    text: 'Example',
    showBlink: true,
    colorText: '#FFF',
    colorTyping: '#0075D7',
    speed: 1,
    ...props
  };

  return render(
    <TextTyping {...defaultProps} />
  );
};
