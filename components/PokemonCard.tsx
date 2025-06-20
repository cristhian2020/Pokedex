import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Pokemon } from "../types/pokemon";
import { usePokemon } from "../hooks/usePokemon";

interface PokemonCardProps {
pokemonName: string;
}

const PokemonCard = ({ pokemonName }: PokemonCardProps) => {
  const {data: pokemon} = usePokemon(pokemonName)

   if (!pokemon) return null;

  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: pokemon.sprites.other["official-artwork"].front_default,
        }}
      />
      <Text style={styles.name}>{pokemon.name}</Text>
      <View style={styles.typesContainer}>
        {pokemon.types.map((type) => (
          <Text key={type.slot} style={styles.type}>
            {type.type.name}
          </Text>
        ))}
      </View>
      <Text style={styles.id}>#{pokemon.id}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  card:{
    backgroundColor:'#f8f8f8',
    borderRadius: 10,
    padding: 16,
    marginBottom:16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset:{width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 120,
    height: 120,
  },
  type: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#eee",
    borderRadius: 20,
    marginHorizontal: 4,
    textTransform: "capitalize",
  },
  typesContainer:{
    flexDirection: "row",
    marginTop: 8,
  },
  name:{
    fontSize:20,
    fontWeight:"bold",
    textTransform:"capitalize",
    marginTop:8,
  },
  id:{
    marginTop: 8,
    color: "#666",
  }
});
export default PokemonCard;
