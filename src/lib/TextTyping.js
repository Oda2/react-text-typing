import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const TextTyping = ({
  text,
  showBlink,
  component: Component = 'h1',
  ...props
}) => {
  const classes = useStyles({ ...props });

  return (
    <Component
      className={`${classes.text} ${showBlink ? classes.blink : ''}`}
      data-text={text}
      {...props}
    >
      {text}
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
  /** */
  text: PropTypes.string.isRequired,
  /** */
  component: PropTypes.elementType,
  /** */
  colorText: PropTypes.string,
  /** */
  colorTyping: PropTypes.string,
  /** */
  showBlink: PropTypes.bool
};

TextTyping.defaultProps = {
  showBlink: true,
  colorText: '#FFF',
  colorTyping: '#0075D7'
};

export default TextTyping;
