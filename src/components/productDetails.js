import React, { Component } from 'react'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { H1, H2, H3,  Text } from "native-base";
import { Image } from 'react-native';

class productDetails extends Component {
  render(){
    const {product} = this.props
    const hasDiscount = product.discountedPrice
    return(
      <Grid>
        <Col size={40}>
          <Image source ={{uri:product.productImg}} style={{height:150, width:150, flex: 1}}/>
        </Col>
        <Col size={60}>
          <Row>
              <H3>{product.productDescription}</H3>
          </Row>
          <Row>
            <Col>
            {hasDiscount && (
              <Row><Text style={{color:'red'}}>${product.discountedPrice}</Text></Row>
            )}
            <Row><Text style={{textDecorationLine: hasDiscount ? 'line-through' : 'none'}}>${product.subtotal}</Text></Row>
            </Col>
            <Col>
              <Text>Qty: {product.quantity}</Text>
            </Col>
          </Row>
        </Col>
      </Grid>
    )
  }
}

export default productDetails
