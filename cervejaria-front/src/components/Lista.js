import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput, FlatList } from 'react-native';

import api from '../services/axios';

const Lista = ({navigation}) => {
  const CERVEJAS_MOCK = [
    {
      nome: "Cacilds",
      tipo: "Lager"
    },
    {
      nome: "Heineken",
      tipo: "Lager"
    }
  ]

  const [cervejas, setCervejas] = useState(CERVEJAS_MOCK);

  const getCervejas = async () => {
    try{
      const response = await api.get('/cervejas');
      console.log(JSON.stringify(response));
      setCervejas(response.data);
    } catch (error) {
      console.log("DEU RUIM" + error);
    }
  }

  const TextCerveja = ({item}) => {
    return(
      <View>
        <Text style={styles.cervejaNome}>{item.nome} - {item.tipo}</Text>
      </View>
    )
  }

  return(
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Cervejaria Cervejas</Text>
        
        <View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={getCervejas}>
            <Text style={styles.buttonText}>Atualizar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.tituloLista}>Listagem de Cervejas</Text>
        <FlatList
        data={cervejas}
        renderItem={TextCerveja}
        keyExtractor={ cerveja => cerveja.nome }
        
        
        ></FlatList>
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


export default Lista;