import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Product } from '../types';

interface Props {
  product: Product
}

class ProductDetail extends Component<Props> {
  componentDidMount() {}

  render() {
    return (
      <div>
        <h2>Product</h2>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  product: state.products.product,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetail);
