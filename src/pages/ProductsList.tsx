import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
 Container, Typography, Card, Box, Grid, Button,
} from '@material-ui/core';
import NumberFormatField from '../components/NumberFormatField';
import { Product } from '../types';

interface Props {
  products: Product[]
}

export class ProductsList extends Component<Props> {
  componentDidMount() {}

  render() {
    const { products } = this.props;
    return (
      <Container>
        <Box pt={5}>
          <Grid container direction="column" spacing={3}>
            {products.map((product: Product) => (
              <Button key={product.id}>
                <Grid item xs>
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
                      </Grid>
                    </Box>
                  </Card>
                </Grid>
              </Button>
            ))}
          </Grid>
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsList);
