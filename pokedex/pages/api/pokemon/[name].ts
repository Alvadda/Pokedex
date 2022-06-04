import { getPokemon } from '../../../lib/pokemon'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.query

  const data = await getPokemon(name as string)

  if (!data) res.status(404).json({ message: 'Not found' })

  res.status(200).json(data)
}
