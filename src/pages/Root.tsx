/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Card,
  Box,
  Grid,
  Button,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import {
 withRouter, Switch, Route, RouteComponentProps,
} from 'react-router-dom';
import * as actions from '../actions/products';
import { Product } from '../types';
import Routes from '../constants/routes';
import { ProductsList } from './ProductsList';
import ProductDetail from './ProductDetail';

const styles = {
  grow: {
    flexGrow: 1,
  },
};

interface RootProps {
  products: Product[]
}

class Root extends Component<RootProps & RouteComponentProps<{}>, {}> {
  componentDidMount() {}

  render = () => (
    <div>
      <Box mb={5}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6">Loja</Typography>
            <div style={styles.grow} />
            <IconButton color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Switch>
        <Route exact path={Routes.ROOT} component={ProductsList} />
        <Route path={Routes.PRODUCT} component={ProductDetail} />
      </Switch>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default withRouter(Root);
