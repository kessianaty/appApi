import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

const request = async(callback) =>{
  const response = await fetch('https://swapi.dev/api/people');
  const parsed = await response.json();
  callback(parsed.results);
}

export default function App() {
  
  const [registros, setRegistos] = useState([]);
  useEffect(()=>{
    request(setRegistos);
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Api do StarWars</Text>
      <FlatList 
      data={registros}
      renderItem={({item})=>
      <Text style={styles.itens}>
        <Text>Nome: {item.name}{'\n'}</Text>
        <Text>Peso: {item.mass}</Text>
      </Text>
    }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#778899',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 25,
    paddingBottom:25,
  },
  itens:{
    flex: 1,
    backgroundColor: '#000080',
    marginBottom: 10,
    marginRight: 10, 
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom:10,
    textAlign: 'center',
    paddingVertical: 10,
    color: '#fff',
    fontSize: 20
  },
  titulo:{
    fontSize: 30,
    textAlign: 'center',
    marginVertical:40
  }
});
