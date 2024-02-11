import React from 'react'
import { Organic } from '../typings/searchTypings'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"


const Product = ({ product }: { product: Organic }) => {
    return (
        <Link
            href={{
                pathname: "/product",
                query: { url: product.url },
            }}

            className='flex flex-col relative rounded-lg h-full p-5 shadow-md  mt-6'>

            <div>

                <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="mx-auto "
                ></Image>

                <p className='text-xl font-bold'>
                    {product.price?.currency}
                    {product.price?.price}
                </p>


                {product.badge && (
                    <Badge className=" w-fit absolute top-2 right-2 "> {product.badge} </Badge>
                )}

                <p className='font-light '>{product.title}</p>


                {product.rating && (

                    <p className='text-yellow-500 text-sm'>
                        {product.rating.rating} ⭐ <span className='text-gray-400 ml-2'>({product.rating.count})</span></p>

                )}


            </div>
        </Link>
    )
}

export default Product