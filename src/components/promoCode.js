import React, { Component } from 'react'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Input, Item, Button, Text} from "native-base";
import { View } from 'react-native';
import {Dimensions } from 'react-native';
const { width } = Dimensions.get('screen');

class PromoCode extends Component {
  state = {
    inputValue: '',
  }
  onPress = () =>{
    this.props.onPress(this.state.inputValue)
  }

  render(){
    return(
      <Grid>
      <Row>
      <View style={{flex:1, justifyContent:'space-between', flexDirection: 'row'}}>
        <Item rounded style={{width: '60%'}}>
          <Input placeholder={this.props.placeholder} onChangeText={(value)=>this.setState({inputValue :value})} value={this.state.inputValue}/>
        </Item>
          <Button style={{marginRight: 15}} onPress={this.onPress} rounded bordered dark >
            <Text>{this.props.buttonText}</Text>
          </Button>
        </View>
        </Row>
      </Grid>
    )
  }
}

export default PromoCode
