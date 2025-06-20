import { View, Text, FlatList, StyleSheet, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { usePokemonList } from '../hooks/usePokemonList';
import Loading from './Loading';
import Error from './Error';
import { usePokemon } from '../hooks/usePokemon';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
  const [ offset, setOffset] = useState(0);
  const limit = 20;

  const {data, isLoading, isError, error} = usePokemonList(offset, limit);

  const pokemonNames = data?.results.map(item => item.name) || [];

  const loadMore = ()=>{
    setOffset((prev) => prev + limit);
  };

  const loadPrevious = () =>{
    if(offset >= limit){
      setOffset((prev)=> prev - limit);
    }
  };

  if(isLoading && offset === 0){
    return <Loading/>;
  }

  if(isError){
    return <Error message={error instanceof Error ? error.message : 'Unknow error'}/>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonNames}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <PokemonCard pokemonName={item} />}
        numColumns={2}
        columnWrapperStyle={styles.row}
        ListFooterComponent={
          <View style={styles.buttonsContainer}>
            <Pressable style={styles.button} onPress={loadPrevious} disabled={offset === 0}>
              <Text style={styles.text}>Anterior</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={loadMore} >
              <Text style={styles.text}>Siguiente</Text>
            </Pressable>
          
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  row:{
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  buttonsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
    
  },
  button:{
    borderRadius: 5,
    padding: 10,
    margin: 10,
    backgroundColor: '#29b63a',
  },
  text:{
    color: '#fff',
    fontSize: 16,
  }
})
export default PokemonList