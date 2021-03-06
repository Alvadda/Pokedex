import Image from 'next/image'
import { FC } from 'react'

import { Pokemon } from '../lib/pokemon/schemas'
import { For } from './utils/for'

interface Props {
  pokemon: Pokemon
  // onClick?: () => void
}

const PokemonCard: FC<Props> = ({ pokemon }) => (
  <div className="bg-white rounded-md p-5 hover:scale-105 transition-transform duration-200" style={{ backgroundColor: pokemon.color }}>
    <h2 className="text-2xl font-bold first-letter:uppercase text-center mb-3">{pokemon.name}</h2>
    <div className="flex items-center gap-3">
      <figure className="flex justify-center items-center overflow-hidden rounded-full ">
        <Image src={pokemon.image} alt={`Picture of the Pokemon ${pokemon}`} width={150} height={150} />
      </figure>
      <div className="flex justify-between w-full">
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.name} className="text-lg font-bold first-letter:uppercase">
              {stat.name}: {stat.value}
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-between">
          <ul>
            <li className="text-lg font-bold">Id: {pokemon.id}</li>
            <li className="text-lg font-bold">Height: {pokemon.height}</li>
            <li className="text-lg font-bold">Weight: {pokemon.weight}</li>
          </ul>
          <div className="flex justify-end gap-2">
            <For
              each={pokemon.types}
              render={(pokemon) => (
                <div
                  key={pokemon.name}
                  className="w-[25px] h-[25px] rounded-full border-2 border-white"
                  style={{ backgroundColor: pokemon.color }}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PokemonCard
