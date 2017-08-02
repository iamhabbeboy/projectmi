/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Modal,
  TouchableOpacity,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';

//=============Font Awesome
import Icon from 'react-native-vector-icons/FontAwesome';
import FAB from 'react-native-fab';
import {Links} from './components/route';

//==Custom DB======================
import { Model } from './components/Model';

export default class projectmi extends Component {

  componentDidMount(){

  }
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <View style={styles.container}>
       <StatusBar barStyle="light-content" backgroundColor="#1976D2"/>
       <Links />
       <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible)
          }}
          >
         <View>
          <ScrollView>
            <TouchableOpacity style={styles.btnClose} onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text style={styles.title}><Icon name="times" size={20} color="#FFF"/>&nbsp;&nbsp;Add New</Text>
            </TouchableOpacity>
          <View style={styles.pos}>
            <Icon name="pencil" color="#666" style={styles.iconx} size={20}/><TextInput placeholder="Title" style={styles.input} ref="title"/>
          </View>
          <View style={styles.pos}>
            <Icon name="edit" color="#666" style={styles.iconx} size={20}/><TextInput placeholder="Description"
            style={styles.input} ref="desc"/>
          </View>
          <View style={styles.pos}>
            <Icon name="user" color="#666" style={styles.iconx} size={20}/><TextInput placeholder="Author"
            style={styles.input} ref="author"/>
          </View>
          <View style={styles.pos}>
            <Icon name="mobile" color="#666" style={styles.iconx} size={20}/><TextInput placeholder="Phone Number"
            style={styles.input} ref="phone"/>
          </View>
          <View style={styles.pos}>
            <TouchableOpacity style={styles.btnSubmit} onPress={this.addTopic}>
              <Text style={styles.btnWhite}>Submit &nbsp;&nbsp;</Text><Icon name="chevron-right" color="#FFF" size={20} style={styles.btnIcon}/>
            </TouchableOpacity>
          </View>
         </ScrollView>
        </View>
       </Modal>
       <FAB buttonColor="#AC92EC" iconTextColor="#FFFFFF" onClickAction={() => {
          this.setModalVisible(true)
        }}
        visible={true}
        iconTextComponent={<Icon name="plus"/>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#37BC9B',
    padding: 15,
  },
  headerText: {
    color: '#000',
    fontSize: 20,
  },
  title: {
    padding:5,
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Khand-Bold'
  },
  btnClose: {
    backgroundColor: 'tomato',
    padding: 10
  },
  input: {
    padding: 15,
    marginLeft: 20,
  },
  btnSubmit: {
    backgroundColor: 'tomato',
    padding: 20,
    borderRadius: 10
  },
  btnWhite: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Khand-Bold'
  },
  iconx: {
    position: 'absolute',
    top: 24,
    left: 15
  },
  btnIcon: {
    position: 'absolute',
    top: 20,
    right: 10
  },
  pos: {
    padding: 5,
    marginBottom: 5
  }
});

AppRegistry.registerComponent('projectmi', () => projectmi);
