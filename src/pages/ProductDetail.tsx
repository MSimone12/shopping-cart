import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
 Container, Box, Card, Grid, Typography,
} from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import { Product } from '../types';

import * as actions from '../actions/products';
import NumberFormatField from '../components/NumberFormatField';
import MyButton from '../components/Button';

interface Props {
  product: Product
  getProductById(id: number): void
  addProductToCart(id: number): void
}

class ProductDetail extends Component<Props & RouteComponentProps<{ id?: string }>> {
  componentDidMount() {
    const { product, getProductById, match } = this.props;
    if (!product) getProductById(Number(match.params.id));
  }

  addToCart = (id: number) => {
    console.log(id)
    const { addProductToCart } = this.props;
    addProductToCart(id);
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <Container>
          <Box pt={7}>
            <Card raised>
              <Box p={3}>
                {product && (
                  <Grid container>
                    <Grid item xs sm={1}>
                      <Grid container direction="column">
                        <img src={product.picture} alt="" />
                      </Grid>
                    </Grid>
                    <Grid item xs>
                      <Grid container direction="column">
                        <Grid item xs>
                          <Typography variant="h5">{product.title}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="h6">
                            <NumberFormatField value={product.price} displayType="text" />
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography variant="h6">
                            <b>Em estoque:</b>
                            &nbsp;
                            {product.quantity}
                          </Typography>
                        </Grid>
                        <hr />
                        <Grid container>
                          <Grid item xs={3}>
                            <Typography variant="h6">
                              <b>Marca:</b>
                              &nbsp;
                              {product.brand}
                            </Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography variant="h6">
                              <b>Chip:</b>
                              &nbsp;
                              {product.chipType}
                            </Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography variant="h6">
                              <b>Memória:</b>
                              &nbsp;
                              {product.memory}
                            </Typography>
                          </Grid>
                        </Grid>
                        <hr />
                        <Grid item xs>
                          <Typography>
                            <b>Descrição:</b>
                            &nbsp;
                            {product.description}
                          </Typography>
                        </Grid>
                        <hr />
                        <Grid item xs>
                          <MyButton type="button" onClick={() => this.addToCart(product.id)}>
                            Adicionar ao carrinho
                          </MyButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
              </Box>
            </Card>
          </Box>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  product: state.products.product,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetail);
