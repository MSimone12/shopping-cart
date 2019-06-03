import React, { ReactNode } from 'react';
import { Button, Typography } from '@material-ui/core';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined
  children: ReactNode
  onClick(event: any): void
}

const styles = {
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255,105, 135, .3)',
    color: 'white',
    height: 48,
    width: '100%',
    padding: '0 30px',
  },
};

export default class MyButton extends React.Component<ButtonProps> {
  render() {
    const { type, children, onClick } = this.props;
    return (
      <Button style={styles.button} onClick={onClick} type={type}>
        <Typography component="b">{children}</Typography>
      </Button>
    );
  }
}
