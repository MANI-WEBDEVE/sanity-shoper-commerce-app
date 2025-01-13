import DetailsPage from '@/components/DetailsPage'
import { getProductBySlug } from '@/sanity/lib/client'
import React from 'react'

const page = async ({params}: {params:{slug:string}}) => {
 const productData = await  getProductBySlug(params.slug)
  return (
    <div>
      <DetailsPage data={productData[0]}/>
      {/* <DetailsPage /> */}
    </div>
  )
}

export default page
