import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';


type Props = {
    title: string;
    className?: string;
    image?: string;
}

const GridOption = ({ title, className, image }: Props) => {
    return (
        <Link href={
            {
                pathname: "/search",
                query: { q: title }
            }
        }

            className={cn(" grid-option relative", className)}>




            {
                image && (
                    <div className=' overflow-hidden'>
                        <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        className='object-cover overflow-hidden opacity-60 rounded-lg shadow-md'
                    ></Image>
                    <h2 className='text-3xl py-4 relative text-black '>  {title}</h2>
                    <Button className='relative h-8 w-24 bg-white text-black rounded-full border border-black ' >Shop Now</Button>
                </div>
                )
            }
        </Link>
    )
}

export default GridOption