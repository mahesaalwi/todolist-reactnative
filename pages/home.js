import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text} from 'native-base';

import Logos from '../images/logoshape.png';
import Profile from '../images/foto.png';
// import { Container } from './styles';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtcreate}>
        Create <Text style={styles.txtyour}>Your</Text>
      </Text>
      <Text style={styles.txttodolist}>Todolist View</Text>
      <Image style={styles.tinyLogo} source={Logos} />
      <Image style={styles.profile} source={Profile} />
      <Text style={styles.nameprofile}>Mahesa Alwi</Text>

      <TouchableOpacity
        style={styles.logout}
        onPress={() => navigation.navigate('login')}>
        <Text style={styles.fonts}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 30,
  },
  logout: {
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: '#FAD88C',
    width: 100,
    height: 30,
    borderRadius: 3,
  },

  fonts: {
    color: 'white',
    textAlign: 'center',
    marginTop: 2,
  },
  txtcreate: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  txtyour: {
    fontWeight: 'normal',
    fontSize: 25,
  },
  txttodolist: {
    fontWeight: 'normal',
    fontSize: 25,
  },
  tinyLogo: {
    marginTop: -120,
    marginLeft: 250,
  },
  nameprofile: {
    padding: 10,
  },
  profile: {
    marginTop: -50,
    height: 80,
    width: 80,
  },
});

export default Home;
