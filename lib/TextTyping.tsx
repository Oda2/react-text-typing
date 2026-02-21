import React, { useState, useEffect, useCallback, useRef } from 'react';
import './TextTyping.css';

export interface ITextTypingProps {
  text: string;
  component?: React.ElementType<any>;
  colorText?: string;
  colorTyping?: string;
  showBlink?: boolean;
  speed?: number;
  timeTyping?: number;
  fontSize?: string;
  onComplete?: () => void;
  className?: string;
}

export const TextTyping: React.FC<ITextTypingProps> = ({
  text,
  showBlink = true,
  speed = 500,
  component: Component = 'span',
  colorText = '#000000',
  colorTyping = '#0075D7',
  timeTyping = 10,
  fontSize,
  onComplete,
  className = '',
  ...props
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const isCompleteRef = useRef(false);
  const textRef = useRef(text);

  const reset = useCallback(() => {
    setDisplayText('');
    setCurrentIndex(0);
    isCompleteRef.current = false;
  }, []);

  useEffect(() => {
    if (textRef.current !== text) {
      textRef.current = text;
      reset();
    }
  }, [text, reset]);

  useEffect(() => {
    if (currentIndex >= text.length) {
      if (!isCompleteRef.current) {
        isCompleteRef.current = true;
        onComplete?.();
      }
      return;
    }

    const typingTimeout = setTimeout(() => {
      setDisplayText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(typingTimeout);
  }, [currentIndex, text, speed, onComplete]);

  const classes = `text-typing${showBlink ? '' : ' no-blink'}${className ? ` ${className}` : ''}`;

  const style = {
    '--color-text': colorText,
    '--color-typing': colorTyping,
    '--internal-text': displayText,
    '--time-typing': `${timeTyping}s`,
    ...(fontSize && { fontSize }),
  } as React.CSSProperties;

  return (
    <Component className={classes} style={style} data-text={text} {...props}>
      {displayText}
    </Component>
  );
};

export default TextTyping;
