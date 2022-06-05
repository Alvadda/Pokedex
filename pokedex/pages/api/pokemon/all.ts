import { getOrigins, getPokemon } from '../../../lib/pokemon'

import type { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await getOrigins()

  const listOfPokemons = await Promise.all(data.map((pokemon) => getPokemon(pokemon.name)))

  if (!data) res.status(404).json({ message: 'Not found' })

  res.status(200).json(listOfPokemons)
}
