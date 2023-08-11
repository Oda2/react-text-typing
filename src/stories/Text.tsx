import React from 'react';
import TextTyping, { ITextTypingProps } from '../TextTyping';

/**
 * Text Typing Stories
 */
export const TextStorie = ({
  text="Example Text",
  showBlink=true,
  component="h1",
  ...props
}: ITextTypingProps) => {
  return (
    <TextTyping
      text={text}
      showBlink={showBlink}
      component={component}
      {...props}
    />
  );
};
