import Head from 'next/head'

import PokemonCard from '../../components/pokemonCard'
import { getOrigins, getPokemon } from '../../lib/pokemon'
import { Pokemon } from '../../lib/pokemon/schemas'

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pokemonData = await getPokemon(params?.name as string)
  return {
    props: {
      pokemon: pokemonData,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons = await getOrigins()

  const paths = pokemons.map((pokemon) => ({
    params: {
      name: pokemon.name,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

const Home: NextPage<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <div className=" bg-gray-800 p-4">
      <Head>
        <title>{pokemon.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="grid justify-center items-center  h-screen">
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      </section>
    </div>
  )
}

export default Home
