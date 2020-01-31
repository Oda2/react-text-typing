import React from 'react';
import { createUseStyles } from 'react-jss';

const TextTyping = ({ text, component: Component = 'h1', ...props }) => {
  const classes = useStyles({ ...props });

  return (
    <Component
      className={classes.text}
      {...props}
    >
      {text}
    </Component>
  );
};

const useStyles = createUseStyles({
  text: {
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    borderRight: '.1em solid',
    animation: '$typing 2s steps(15), $blinking 0.8s linear infinite'
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
  }
});


export default TextTyping;
