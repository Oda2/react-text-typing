import * as React from 'react';

export interface ReactTextTypingProps {
  text: React.string;
  component?: React.ElementType = 'h1';
  colorText?: string = '#FFF';
  colorTyping?: string = '#0075D7';
  showBlink?: boolean = true;
}

export default class ReactTextTyping extends React.Component<
  ReactTextTypingProps
> {}
