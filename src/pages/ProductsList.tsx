import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import {
 Container, Typography, Card, Box, Grid, Button,
} from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';
import { RouteComponentProps } from 'react-router-dom';
import NumberFormatField from '../components/NumberFormatField';

import { Product } from '../types';
import * as actions from '../actions/products';

interface Props {
  products: Product[]
  getProducts(): void
  getProductbyId(id: number): void
}

class ProductsList extends Component<Props & RouteComponentProps<{}>> {
  componentDidMount() {
    const { getProducts } = this.props;
    getProducts();
  }

  getProduct = (id: number) => {
    const { getProductbyId, history } = this.props;
    getProductbyId(id);
    history.push(`/${id}`);
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
                        <Grid item xs={2}>
                          <Button
                            onClick={() => this.getProduct(product.id)}
                            size="large"
                            fullWidth
                            color="secondary"
                          >
                            <ArrowRight />
                          </Button>
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
  products: state.products.products,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsList);
