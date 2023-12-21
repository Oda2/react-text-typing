import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { TextRoot } from "./styles";

export interface ITextTypingProps {
  text: string;
  component?: React.ComponentType<any>;
  colorText?: string;
  colorTyping?: string;
  showBlink?: boolean;
  speed?: number;
  timeTyping?: number;
}

export const TextTyping: React.FC<ITextTypingProps> = ({
  text,
  showBlink = true,
  speed = 500,
  component: Component = "span",
  colorText = "#fff",
  colorTyping = "#0075D7",
  timeTyping = 10,
  ...props
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayText(prevDisplayText => prevDisplayText + text.charAt(currentIndex));
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    };

    const typingInterval = setInterval(typeNextCharacter, speed);

    return () => clearInterval(typingInterval);
  }, [currentIndex, text, speed]);

  return (
    <TextRoot
      as={Component}
      data-text={text}
      internalText={displayText}
      colorText={colorText}
      colorTyping={colorTyping}
      timeTyping={timeTyping}
      showBlink={showBlink}
      {...props}
    >
      {displayText}
    </TextRoot>
  );
};

TextTyping.propTypes = {
  /** Text to be demonstrated in the component */
  text: PropTypes.string.isRequired,
  /** Component to be used internally in the component */
  component: PropTypes.func,
  /** Text color */
  colorText: PropTypes.string,
  /** Background fill color */
  colorTyping: PropTypes.string,
  /** Show flashing text icon */
  showBlink: PropTypes.bool,
  /** Text speed appearing */
  speed: PropTypes.number,
  /** Time typing in animation */
  timeTyping: PropTypes.number,
};

export default TextTyping;