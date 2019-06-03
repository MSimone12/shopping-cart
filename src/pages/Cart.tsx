import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import {
 Container, Box, Grid, Card, Typography, IconButton,
} from '@material-ui/core';

import { Add, Remove, Close } from '@material-ui/icons';
import { Product } from '../types';
import NumberFormatField from '../components/NumberFormatField';
import * as actions from '../actions/products';

interface Props {
  products: Product[]
  totalValue: number
  removeProductFromCart(id: number): void
  raiseProductQuantity(id: number): void
  reduceProductQuantity(id: number): void
}

class Cart extends Component<Props> {
  removeFromCart = (id: number) => {
    const { removeProductFromCart } = this.props;
    removeProductFromCart(id);
  }

  raiseQuantity = (id: number) => {
    const { raiseProductQuantity } = this.props;
    raiseProductQuantity(id);
  }

  reduceQuantity = (id: number) => {
    const { reduceProductQuantity } = this.props;
    reduceProductQuantity(id);
  }

  render() {
    const { products } = this.props;
    return (
      <Container>
        <Box pt={5}>
          <Grid container direction="column" spacing={3}>
            {products
              && products.map((product: Product) => (
                <Grid item xs key={product.id}>
                  <Card raised style={{ minWidth: '100%', textAlign: 'initial' }}>
                    <Box p={5}>
                      <Grid container>
                        <Grid item xs={2}>
                          <Box pr={3}>
                            <img alt="" src={product.picture} />
                          </Box>
                        </Grid>
                        <Grid item xs>
                          <Grid container>
                            <Grid container direction="column" justify="flex-start">
                              <Grid item xs>
                                <Typography variant="h6">{product.title}</Typography>
                              </Grid>
                              <Grid item xs>
                                <Typography component="b" variant="subtitle1">
                                  <NumberFormatField displayType="text" value={product.price} />
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs sm={4}>
                          <Grid container spacing={3}>
                            <Grid item xs>
                              <Grid container>
                                <IconButton
                                  color="secondary"
                                  onClick={() => this.reduceQuantity(product.id)}
                                >
                                  <Remove />
                                </IconButton>
                                <Box p={3}>
                                  <Typography variant="h6">{product.quantity}</Typography>
                                </Box>
                                <IconButton
                                  color="secondary"
                                  onClick={() => this.raiseQuantity(product.id)}
                                >
                                  <Add />
                                </IconButton>
                              </Grid>
                            </Grid>
                            <Grid item xs>
                              <IconButton
                                color="secondary"
                                onClick={() => this.removeFromCart(product.id)}
                              >
                                <Close />
                              </IconButton>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  products: state.cart.products,
  totalValue: state.cart.totalValue,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
