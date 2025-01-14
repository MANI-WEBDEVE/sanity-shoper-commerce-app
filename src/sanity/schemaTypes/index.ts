import { type SchemaTypeDefinition } from 'sanity'
import products from './product-schema'
import order from "./order-schema"
import comment from './commet-schema'
import contact from './contact-schema'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, order,comment,contact],
}
