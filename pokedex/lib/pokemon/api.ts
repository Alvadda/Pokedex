import axios from 'axios'

import { mapPokemon } from './mapper'
import { Pokemon, PokemonList } from './schemas'

export async function getOrigins() {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')

  return PokemonList.parse(response.data.results)
}

export async function getPokemon(name: string) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)

  return Pokemon.parse(mapPokemon(response.data))
}
