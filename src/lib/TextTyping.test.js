import React from 'react';
import { render, cleanup, getByText } from '@testing-library/react';
import TextTyping from './TextTyping';

afterEach(cleanup);

describe('TextTyping Component', () => {
  it('should render component', () => {
    const text = 'rice';
    const { container } = createComponent({ text });

    expect(container.firstChild).toBeDefined();
    expect(getByText(container, text)).toBeDefined();
  });

  it('should render component with not show blink', () => {
    const text = 'rice';

    const { container } = createComponent({ showBlink: false, text });
    expect(container.firstChild).toBeDefined();
    expect(getByText(container, text)).toBeDefined();
  });
});

function createComponent(props = {}) {
  const defaultProps = {
    text: 'Example',
    showBlink: true,
    colorText: '#FFF',
    colorTyping: '#0075D7',
    ...props
  };

  return render(
    <TextTyping {...defaultProps} />
  );
};
