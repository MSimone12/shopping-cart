import React, { Component } from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';

export default class NumberFormatField extends Component<NumberFormatProps> {
  componentDidMount() {}

  render() {
    return (
      <NumberFormat
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        fixedDecimalScale
        decimalScale={2}
        {...this.props}
      />
    );
  }
}
