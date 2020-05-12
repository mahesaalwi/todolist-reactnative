import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Logos from '../images/logo.png';

import {Form, Item, Input, Button, Text} from 'native-base';

const login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textheader}>
        Hello <Text style={styles.txtusers}>Users</Text>
      </Text>
      <Text style={styles.textbottom}>Welcome Back</Text>
      <Text style={styles.textname}>Please sign in to continue</Text>

      <Image style={styles.tinyLogo} source={Logos} />

      <Form style={styles.forminput}>
        <Item regular>
          <Input
            style={styles.txtinput}
            placeholder="Nama pengguna username atau email"
          />
        </Item>
        <Item regular style={styles.pwd}>
          <Input
            secureTextEntry={true}
            style={styles.txtinput}
            placeholder="Kata Sandi"
          />
        </Item>
        <Button
          style={styles.btnlogin}
          onPress={() => navigation.navigate('Homes')}>
          <Text style={styles.text}>Masuk</Text>
        </Button>
      </Form>

      <Text style={styles.Signup}>
        Belum punya akun?{' '}
        <Text
          style={styles.txtsecond}
          onPress={() => navigation.navigate('SignUp')}>
          buat disini
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  forminput: {
    marginTop: 100,
    padding: 10,
    width: 410,
    marginLeft: 10,
  },

  txtsecond: {
    fontSize: 13,
    color: '#FA9F88',
  },

  errorMessage: {
    color: 'red',
    textAlign: 'center',
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
    marginTop: 200,
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

export default login;
