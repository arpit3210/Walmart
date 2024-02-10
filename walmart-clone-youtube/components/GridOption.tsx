import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { cn } from '@/lib/utils';


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

            <h2>  {title}</h2>

            {
                image && (
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        className='object-cover opacity-20 rounded-lg shadow-md'
                    ></Image>
                )
            }
        </Link>
    )
}

export default GridOption