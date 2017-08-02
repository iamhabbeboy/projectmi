import React, { Component} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export class CustomModal extends Component {

  render() {
    return (
      <Modal
         animationType={"slide"}
         transparent={false}
         visible={this.state.modalVisible}
         onRequestClose={() => {
           this.setModalVisible(!this.state.modalVisible)
         }}
         >
        <View>
         <View>
           <TouchableOpacity style={styles.btnClose} onPress={() => {
             this.setModalVisible(!this.state.modalVisible)
           }}>
             <Text style={styles.title}><Icon name="times" size={20} color="#FFF"/>&nbsp;&nbsp;Add New</Text>
           </TouchableOpacity>
         <View style={styles.pos}>
           <Icon name="pencil" color="#666" style={styles.iconx} size={20}/><TextInput placeholder="Title" style={styles.input}/>
         </View>
         <View style={styles.pos}>
           <Icon name="edit" color="#666" style={styles.iconx} size={20}/><TextInput placeholder="Description"
           style={styles.input}/>
         </View>
         <View style={styles.pos}>
           <Icon name="user" color="#666" style={styles.iconx} size={20}/><TextInput placeholder="Author"
           style={styles.input}/>
         </View>
         <View style={styles.pos}>
           <Icon name="mobile" color="#666" style={styles.iconx} size={20}/><TextInput placeholder="Phone Number"
           style={styles.input}/>
         </View>
         <View style={styles.pos}>
           <TouchableOpacity style={styles.btnSubmit}>
             <Text style={styles.btnWhite}>Submit &nbsp;&nbsp;</Text><Icon name="chevron-right" color="#FFF" size={20} style={styles.btnIcon}/>
           </TouchableOpacity>
         </View>
        </View>
       </View>
      </Modal>
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
