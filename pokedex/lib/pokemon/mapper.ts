const colors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
}
type Colors = keyof typeof colors

const getColors = (type: Colors) => colors[type] || '#777'

export function mapPokemon(pokemon: any) {
  return {
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.types.map((t: any) => ({ name: t.type.name, color: getColors(t.type.name) })),
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
    stats: pokemon.stats.map((s: any) => ({
      name: s.stat.name,
      value: s.base_stat,
    })),
    color: getColors(pokemon.types[0].type.name),
    height: pokemon.height,
    weight: pokemon.weight,
  }
}
