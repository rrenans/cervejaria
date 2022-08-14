// import React, { useState } from 'react';
// import 'react-native-gesture-handler';
// import { NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import Lista from './components/Lista';

// import {
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   TouchableOpacity
// } from 'react-native';

// import api from './services/axios';

// const Stack = createStackNavigator();

// const App = () => {

//   const CERVEJAS_MOCK = [
//     {
//       nome: "Cacilds",
//       tipo: "Lager"
//     },
//     {
//       nome: "Heineken",
//       tipo: "Lager"
//     }
//   ]

//   const [nomeCerveja, setNomeCerveja] = useState("");
//   const [tipoCerveja, setTipoCerveja] = useState("");
//   const [cervejas, setCervejas] = useState(CERVEJAS_MOCK);

//   const getCervejas = async () => {
//     try{
//       const response = await api.get('/cervejas');
//       console.log(JSON.stringify(response));
//       setCervejas(response.data);
//     } catch (error) {
//       console.log("DEU RUIM " + error);
//     }
//   }

//   const createCerveja = async () => {
//     if (nomeCerveja && tipoCerveja){
//       try{
//         const response = await api.post('/cervejas', {"nome": nomeCerveja, "tipo": tipoCerveja});
//         console.log(JSON.stringify(response.data));
    
//         cervejas.push(response.data);

//         setCervejas(cervejas);
//       } catch (error) {
//         console.log("DEU RUIM" + error);
//       }
//     } else {
//       console.log("Vazio")
//     }
//   }

//   const TextCerveja = ({item}) => {
//     return(
//       <View>
//         <Text style={styles.cervejaNome}>{item.nome} - {item.tipo}</Text>
//       </View>
//     )
//   }

//   return(
//     <>
//       <View style={styles.container}>
//         <Text style={styles.header}>Cervejaria Cervejas</Text>
//         <TextInput placeholder="inscreva nome da cerveja" style={styles.input} value={nomeCerveja} onChangeText={item => {
//           setNomeCerveja(item)
//           }} />
//         <TextInput placeholder="inscreva tipo da cerveja" style={styles.input} value={tipoCerveja} onChangeText={item => {setTipoCerveja(item)}} />
        
//         <View>
//         <TouchableOpacity style={styles.button} onPress={createCerveja}>
//             <Text style={styles.buttonText}>Criar</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button} onPress={getCervejas}>
//             <Text style={styles.buttonText}>Atualizar</Text>
//           </TouchableOpacity>
//         </View>
//         <Text style={styles.tituloLista}>Listagem de Cervejas</Text>
//         <FlatList
//         data={cervejas}
//         renderItem={TextCerveja}
//         keyExtractor={ cerveja => cerveja.nome }
//         ></FlatList>
//       </View>
//     </>
//   );
// }

// const SecondApp = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Lista}/>
//         {/* <Stack.Screen name="Cadastro" component={Cadastro}/> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     borderColor: 'blue',
//     borderWidth: 1,
//     alignContent: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
//   header: {
//     fontSize: 42,
//     marginBottom: 15
//   },
//   input:{
//     width: 200,
//     height: 40,
//     marginVertical: 10,
//     borderColor:'black',
//     borderWidth: 1,
//     borderRadius: 20,
//     paddingLeft: 20
//   },
//   button: {
//     borderColor: '#ffd700',
//     borderWidth: 1,
//     borderRadius: 1,
//     backgroundColor: '#ffd700',
//     width: 100,
//     height: 25,
//     alignItems: 'center',
//     marginTop: 15,
//   },
//   buttonText:{
//     color:"#000"
//   },
//   cervejaNome: {
//     borderColor: '#9e9e9e',
//     borderTopWidth: 1,
//     paddingVertical: 20,
//     width: 200,
//     textAlign: 'center'
//   },
//   tituloLista:{
//     fontSize: 24,
//     marginTop: 30,
//     marginBottom: 20
//   }
// });

// export default App;
// module.exports = {SecondApp};

import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Lista from './components/Lista';
import Cadastro from './components/Cadastro';
import Mapa from './components/Mapa'

const Stack = createStackNavigator();

const SecondApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Lista}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Mapa" component={Mapa}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SecondApp;