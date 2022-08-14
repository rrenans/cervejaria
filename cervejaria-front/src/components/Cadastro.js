import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';

import api from '../services/axios';

const Cadastro = ({navigation}) => {

  // const { name } = route.params;

  const [nomeCerveja, setNomeCerveja] = useState("");
  const [tipoCerveja, setTipoCerveja] = useState("");

  const createCerveja = async () => {

    if (nomeCerveja && tipoCerveja){
      try{
        const response = await api.post('/cervejas', {"nome": nomeCerveja, "tipo": tipoCerveja});
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("DEU RUIM" + error);
      }
    } else {
      console.log("Vazio")
    }
  }

  return(
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Cervejaria Cervejas</Text>
        <TextInput placeholder="inscreva nome da cerveja" style={styles.input} value={nomeCerveja} onChangeText={item => {
          setNomeCerveja(item)
          }} />
        <TextInput placeholder="inscreva tipo da cerveja" style={styles.input} value={tipoCerveja} onChangeText={item => {setTipoCerveja(item)}} />
        
        <View>
        <TouchableOpacity style={styles.button} onPress={createCerveja}>
            <Text style={styles.buttonText}>Criar</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',

  },
  header: {
    fontSize: 42,
    marginBottom: 15
  },
  input:{
    width: 200,
    height: 40,
    marginVertical: 10,
    borderColor:'black',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 20
  },
  button: {
    borderColor: '#ffd700',
    borderWidth: 1,
    borderRadius: 1,
    backgroundColor: '#ffd700',
    width: 100,
    height: 25,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText:{
    color:"#000"
  },
  cervejaNome: {
    borderColor: '#9e9e9e',
    borderTopWidth: 1,
    paddingVertical: 20,
    width: 200,
    textAlign: 'center'
  },
  tituloLista:{
    fontSize: 24,
    marginTop: 30,
    marginBottom: 20
  }
});


export default Cadastro;