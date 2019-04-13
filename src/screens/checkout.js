import React from 'react';
import { View, Alert } from 'react-native';
import { Container, Header, Content, Left, Body, Right, Title, ListItem, Thumbnail, List, Separator, Text, H2} from "native-base";
import {Collapse,CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { ProductDetails, PromoCode } from "../components"
import { connect } from 'react-redux';
import { fetchProductData, applyPromoCode } from '../actions/productActions'
import { compose } from 'redux'

const PickupSavingsAlert = ({ text }) => {
  const showAlert = () =>{
      Alert.alert(
         'Picking up your order in the store helps cut costs and we pass the savings on to you'
      )
   }
   return (
    <Text style={{textDecorationLine:'underline'}} onPress = {showAlert}>{text}</Text>
   )
}

class Checkout extends React.Component {
  state = {
    showPromo: false,
    showDetails: false,
  }
  async componentDidMount () {
    const { fetchProductData } = this.props
    await fetchProductData()
  }
  calculateTotal = (product) => {
    if(product.discountedPrice){
      return product.discountedPrice - product.savings + product.tax
    }
    return product.total
  }
  handeApplyPromoCode = (promoCode) =>{
      this.props.applyPromoCode(promoCode)
      this.setState({showDetails:true})
  }


  render() {
    const { product } = this.props
    return (
      <Container>
        <Header>
          <Left/>
            <Body>
              <Title>Check Out</Title>
            </Body>
          <Right />
        </Header>
        <Content padder>
        <ListItem style={{borderBottomWidth: 0, justifyContent: 'space-between'}}>
            <Text>Subtotal</Text>
            <Text style={{fontWeight: '600'}}>${product.discountedPrice ? product.discountedPrice : product.subtotal}</Text>
        </ListItem>
        <ListItem style={{borderBottomWidth: 0 ,justifyContent: 'space-between'}}>
        <PickupSavingsAlert text='Pickup savings'></PickupSavingsAlert>
            <Text style={{color:'red', fontWeight:'600'}}>-${product.savings}</Text>
        </ListItem>
        <ListItem style={{justifyContent: 'space-between'}}>
            <Text>Est. taxes & fees {"\n"}(Based on 94085)</Text>
            <Text style={{fontWeight: '600'}}>${product.tax}</Text>
        </ListItem>
        <ListItem style={{borderBottomWidth: 0, justifyContent: 'space-between'}}>
            <H2 style={{fontWeight: '600'}}>Est. total</H2>
            <H2 style={{fontWeight: '600'}}>{this.calculateTotal(product)}</H2>
        </ListItem>
    <Collapse isCollapsed={this.state.showDetails}>
      <CollapseHeader>
        <Separator style={{backgroundColor:'white'}} >
          <Text
            onPress={() => this.setState({ showDetails: !this.state.showDetails})}
            style={{textDecorationLine:'underline', fontSize: 18}}
          >
            {this.state.showDetails ? 'Hide item details -' : 'See item details +'}
          </Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
          <ProductDetails product = {product}/>
      </CollapseBody>
    </Collapse>
  <ListItem style={{ borderBottomWidth: 1, borderBottomColor:'#DDD', marginBottom:12, marginTop:12}}/>
    <Collapse isCollapsed={this.state.showPromo}>
      <CollapseHeader>
        <Separator style={{backgroundColor:'white'}} >
          <Text
          style={{textDecorationLine:'underline', fontSize: 18}}
          onPress={() => this.setState({ showPromo: !this.state.showPromo})}>
          {this.state.showPromo ? 'Hide promo code -' : 'Apply promo code +'}
          </Text>
        </Separator>
      </CollapseHeader>
      <CollapseBody>
        <PromoCode placeholder='Promo Code' buttonText='APPLY' onPress={this.handeApplyPromoCode} />
      </CollapseBody>
    </Collapse>
        </Content>
    </Container>
    );
  }
}

function mapStateToProps(state) {
  const { product } = state.product
  return { product }
}

function mapDispatchToProps(dispatch){
  return {
    fetchProductData: () => dispatch(fetchProductData()),
    applyPromoCode: (promoCode) => dispatch(applyPromoCode(promoCode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
