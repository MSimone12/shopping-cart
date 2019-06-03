import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
 Container, Box, Card, Grid, Typography,
} from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import { Product } from '../types';

import * as actions from '../actions/products';

interface Props {
  product: Product
  getProductById(id: number): void
}

class ProductDetail extends Component<Props & RouteComponentProps<{ id?: string }>> {
  componentDidMount() {
    const { product, getProductById, match } = this.props;
    if (!product) getProductById(Number(match.params.id));
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <Container>
          <Box pt={7}>
            <Card raised>
              <Box p={3}>
                <Grid container>
                  {product
                    && Object.keys(product).map((info: string) => (
                      <Grid item xs sm={6}>
                        <Typography component="p">{product[info]}</Typography>
                      </Grid>
                    ))}
                </Grid>
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
