import { getOrigins } from '../../lib/pokemon'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await getOrigins()

  if (!data) res.status(404).json({ message: 'Not found' })

  res.status(200).json(data)
}
