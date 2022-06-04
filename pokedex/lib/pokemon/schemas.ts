import { z } from 'zod'

export const Pokemon = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string().url(),
  types: z.array(
    z.object({
      name: z.string(),
      color: z.string(),
    })
  ),
  stats: z.array(
    z.object({
      name: z.string(),
      value: z.number(),
    })
  ),
  color: z.string(),
  height: z.number(),
  weight: z.number(),
})

export const PokemonList = z.array(
  z.object({
    name: z.string(),
    url: z.string().url(),
  })
)

export type PokemonList = z.infer<typeof PokemonList>
export type Pokemon = z.infer<typeof Pokemon>
