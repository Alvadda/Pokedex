import Head from 'next/head'

import PokemonCard from '../components/pokemonCard'
import { getOrigins, getPokemon } from '../lib/pokemon'
import { Pokemon } from '../lib/pokemon/schemas'

import type { GetStaticProps, NextPage } from 'next'
export const getStaticProps: GetStaticProps = async () => {
  const allOriginPokemons = await getOrigins()

  const listOfPokemons = await Promise.all(allOriginPokemons.map((pokemon) => getPokemon(pokemon.name)))

  return {
    props: {
      pokemons: listOfPokemons,
    },
  }
}

const Home: NextPage<{ pokemons: Pokemon[] }> = ({ pokemons }) => {
  return (
    <div className=" bg-gray-800">
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <section className="grid grid-cols-3 2xl:grid-cols-4 gap-4">
        {pokemons.map((pokemon: any) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    </div>
  )
}

export default Home