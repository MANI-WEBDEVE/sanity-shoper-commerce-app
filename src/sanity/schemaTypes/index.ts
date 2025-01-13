import { type SchemaTypeDefinition } from 'sanity'
import products from './product-schema'
import order from "./order-schema"
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, order],
}
