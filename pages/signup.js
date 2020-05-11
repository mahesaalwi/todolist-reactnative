import React, {Component} from 'react';
import {View, StyleSheet, Image, Alert} from 'react-native';
import Logos from '../images/logo.png';
import {Form, Item, Input, Button, Text} from 'native-base';
import firebase from '../databases/index';

export default class login extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      isLoading: false,
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  registerUser = () => {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup !');
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .createUserWithEmailPassword(this.state.email, this.state.password)
        .then(res => {
          res.user.updateProfile({
            displayName: this.state.displayName,
          });
          console.log('User Registered successfully !');
          this.setState({
            isLoading: false,
            displayName: '',
            email: '',
            password: '',
          });
          this.props.navigation.navigate('login');
        });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textheader}>
          Hello <Text style={styles.txtusers}>Users</Text>
        </Text>
        <Text style={styles.textbottom}>Create Acount</Text>
        <Text style={styles.textname}>Please sign up to continue</Text>

        <Image style={styles.tinyLogo} source={Logos} />

        <Form style={styles.forminput}>
          <Item regular>
            <Input
              style={styles.txtinput}
              placeholder="Nama pengguna username atau email"
            />
          </Item>
          <Item regular style={styles.pwd}>
            <Input style={styles.txtinput} placeholder="Username" />
          </Item>
          <Item regular style={styles.pwd}>
            <Input
              style={styles.txtinput}
              placeholder="Kata Sandi"
              secureTextEntry={true}
            />
          </Item>
          <Button style={styles.btnlogin}>
            <Text style={styles.text}>Buat Akun</Text>
          </Button>
        </Form>

        <Text style={styles.Signup}>
          Sudah punya akun?{' '}
          <Text
            style={styles.txtsecond}
            onPress={() => this.props.navigation.navigate('login')}>
            Masuk disini
          </Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  forminput: {
    marginTop: 100,
    padding: 10,
    width: 410,
    marginLeft: 10,
  },

  txtsecond: {
    fontSize: 13,
    color: 'blue',
  },

  pwd: {
    marginTop: 20,
  },

  txtinput: {
    fontSize: 13,
  },

  Signup: {
    fontSize: 13,
    textAlign: 'center',
    color: 'black',
    marginTop: 100,
  },

  btnlogin: {
    marginTop: 30,
    width: 380,
    backgroundColor: '#FFC63E',
    height: 50,
    marginLeft: 5,
    justifyContent: 'center',
  },

  textheader: {
    fontSize: 25,
    marginLeft: 30,
    marginTop: 90,
  },
  textbottom: {
    fontSize: 25,
    marginLeft: 30,
    marginTop: 5,
  },
  txtusers: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  textname: {
    fontSize: 15,
    fontWeight: 'normal',
    marginTop: 25,
    marginLeft: 30,
  },
  tinyLogo: {
    marginLeft: 300,
    marginTop: -220,
  },
  username: {
    marginTop: 2,
  },
});
