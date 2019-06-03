/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
 AppBar, Toolbar, Typography, IconButton, Badge, Box,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import {
 withRouter, Switch, Route, RouteComponentProps,
} from 'react-router-dom';
import Routes from '../constants/routes';
import ProductsList from './ProductsList';
import ProductDetail from './ProductDetail';
import NumberFormatField from '../components/NumberFormatField';
import Cart from './Cart';

const styles = {
  grow: {
    flexGrow: 1,
  },
};

interface RootProps {
  cart: number
  totalPrice: number
}

class Root extends Component<RootProps & RouteComponentProps<{}>, {}> {
  componentDidMount() {}

  render = () => {
    const { cart, totalPrice, history } = this.props;
    return (
      <div>
        <Box mb={5}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton color="inherit" onClick={() => history.push(Routes.ROOT)}>

              <Typography variant="h6">Loja</Typography>
              </IconButton>
              <div style={styles.grow} />
              <IconButton color="inherit" onClick={() => history.push(Routes.CART)}>
                <Badge badgeContent={cart} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
              <Box p={2}>
                <NumberFormatField displayType="text" value={totalPrice} />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Switch>
          <Route exact path={Routes.ROOT} component={ProductsList} />
          <Route path={Routes.PRODUCT} component={ProductDetail} />
          <Route path={Routes.CART} component={Cart} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  cart: state.cart.products.length,
  totalPrice: state.cart.totalValue,
});

export default withRouter(connect(mapStateToProps)(Root));
