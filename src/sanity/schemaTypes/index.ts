import { type SchemaTypeDefinition } from 'sanity'
import products from './product-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products],
}
