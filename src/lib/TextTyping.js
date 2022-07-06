import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const blinking = keyframes`
0% {
  border-color: transparent;
};
  
50% {
  border-color: black;
}
`;

const loading = keyframes`
0% {
  max-width: 0%;
}
`;

const TextRoot = styled.span`
position: relative;
color: ${props => props.colorText};
font-size: 5em;
margin: 0;
padding: 0;
border-right: .1em solid;
animation: ${blinking} 0.8s linear infinite;

&::before {
  content: '${props => props.internalText}';
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
  animation: ${loading} ${props => props.timeTyping}s steps(80);
  max-width: 100%;
  color: ${props => props.colorTyping};
}
`;


const TextTyping = ({ text, showBlink, speed, component: Component, ...props }) => {
  const [internalText, setInternalText] = useState('');
  const timer = useRef(null);

  useEffect(() => {
    let typing = text.split('');

    timer.current = setInterval(() => {
      if (typing.length > 0) {
        const next = typing.shift();
        setInternalText((value) => value + next);
      } else {
        clearInterval(timer.current);
      }
    }, speed);

    return () => { };
  }, [text]);

  return (
    <TextRoot
      as={Component}
      data-text={text}
      internalText={internalText}
      {...props}
    >
      {internalText}
    </TextRoot>
  );
};

TextTyping.propTypes = {
  /** Text to be demonstrated in the component */
  text: PropTypes.string.isRequired,
  /** Component to be used internally in the component */
  component: PropTypes.elementType,
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

TextTyping.defaultProps = {
  component: 'h1',
  showBlink: true,
  colorText: '#FFF',
  colorTyping: '#0075D7',
  speed: 500,
  timeTyping: 10
};

export default TextTyping;
