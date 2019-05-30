/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
 Container, AppBar, Toolbar, Typography, IconButton, Badge,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import * as actions from '../actions/products';
import { Product } from '../types';

const styles = {
  grow: {
    flexGrow: 1,
  },
};

interface RootProps {
  getProducts(): void
  products: Product[]
}

class Root extends Component<RootProps> {
  componentDidMount = () => {
    const { getProducts } = this.props;
    getProducts();
  }

  render = () => {
    const { products } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Loja</Typography>
            <div style={styles.grow} />
            <IconButton color="inherit">
              <Badge badgeContent={5} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container>
          {products.map(product => (
            <Typography variant="h6">{product.title}</Typography>
          ))}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  products: state.products.products,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Root);
