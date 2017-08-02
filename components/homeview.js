import React, { Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

//=== Model Realm (DB)
import Model from './Model';
import Icon from 'react-native-vector-icons/FontAwesome';

class Homeview extends Component{

  constructor(props) {
    super(props);
    this.state = {
      list: Model.find('')
    };
  }

  render() {

    const datalist = this.state.list.map((val, index) => {
      let len = val.name.length;
      let describe = ''
      if ( len > 50 ) {
        describe = val.name.substr(0, 50) + '...';
      } else {
        describe = val.name;
      }
      return (
        <TouchableOpacity style={styles.btn} key={index}>
          <Text style={styles.btnText}> {val.name} </Text>
          <Text>
           {describe}
          </Text>
          <Text>&nbsp;</Text>
          <Text style={{fontSize: 10}}><Icon name="history" size={10} color="#000" /> &nbsp; Jul 30 &nbsp; <Icon name="user" size={10} color="#000" /> &nbsp; abbey web &nbsp;</Text>
        </TouchableOpacity>
    )})
    return (
      <ScrollView>
        <View style={styles.container}>
          {datalist}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 14
  },
  btnText: {
    color: '#222',
    fontSize: 18
  },
  container: {

  }
})
module.exports = Homeview;
