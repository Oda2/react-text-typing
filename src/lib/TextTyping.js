import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const TextTyping = ({ text, showBlink, speed, component: Component, ...props }) => {
  const classes = useStyles({ ...props });
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

    return () => {};
  }, [text]);

  return (
    <Component
      className={`${classes.text} ${showBlink ? classes.blink : ''}`}
      data-text={internalText}
      {...props}
    >
      {internalText}
    </Component>
  );
};

const useStyles = createUseStyles({
  text: {
    position: 'relative',
    color: props => props.colorText,
    fontSize: '5em',
    '&:before': {
      content: 'attr(data-text)',
      position: 'absolute',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      animation: '$loading 5s steps(80)',
      maxWidth: '100%',
      color: props => props.colorTyping
    }
  },
  '@keyframes typing': {
    from: { width: 0 }
  },
  '@keyframes blinking': {
    '0%': {
      borderColor: 'transparent'
    },
    '50%': {
      borderColor: 'black'
    }
  },
  '@keyframes loading': {
    '0%': { maxWidth: 0 }
  },
  blink: {
    margin: 0,
    padding: 0,
    borderRight: '.1em solid',
    animation: '$blinking 0.8s linear infinite'
  }
});

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
  speed: PropTypes.number
};

TextTyping.defaultProps = {
  component: 'h1',
  showBlink: true,
  colorText: '#FFF',
  colorTyping: '#0075D7',
  speed: 500
};

export default TextTyping;
