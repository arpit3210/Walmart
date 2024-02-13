"use client"



import { Button } from '@/components/ui/button'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Grid2X2, Heart, LayoutGrid, Search, ShoppingCart, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCartStore } from '../store'
import { getCartTotal } from '@/lib/getCartTotal'



type Props = {
    title: string;
}


const Header = () => {
    const router = useRouter();


    const cart = useCartStore((state) => state.cart);
    const total = getCartTotal(cart);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const input = e.currentTarget.input.value;
        router.push(`/search?q=${encodeURIComponent(input)}`);
        console.log(input);
    }



    const lists = [
        { title: 'Best Deals', key: 'best-deals' },
        { title: 'Grocery & Essentials', key: 'grocery-essentials' },
        { title: 'Valentines Day Gifts 💓', key: 'valentines-gifts' },
        { title: 'Black and Unlimited', key: 'black-unlimited' },
        { title: 'Spring Outdoor Refresh', key: 'spring-outdoor-refresh' },
        { title: 'Fashion', key: 'fashion' },
        { title: 'Home', key: 'home' },
        { title: 'Electronics', key: 'electronics' },
    ];


    return (
        <header className=''>

            <div className='flex flex-col md:flex-row  bg-blue-500 items-center px-10 py-2 space-x-5' >

                {/* <Button>Sign In</Button> */}

                <Link href="/" className='mb-5 md:mb-0'>
                    <Image
                        src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg"
                        alt='Logo'
                        width={200}
                        height={200}
                        className='  '
                    />

                </Link>
                {/* https://www.youtube.com/watch?v=LWT1LGMmzNk */}


                <form onSubmit={handleSubmit} className='flex items-center pl-5  bg-white  rounded-full w-full flex-1' action="">
                    <input className='flex-1 outline-white rounded-full placeholder:text-sm  text-black' name='input' type="text" placeholder="Search Everything..." />

                    <button type='submit'> <Search className='rounded-full h-10  px-2 w-10 bg-yellow-400 text-white cursor-pointer'></Search> </button>

                </form>

                <div className='flex space-x-5 p-5 items-center justify-center  mt-5 md:mt-0 '>
                    <Link href={"/"} className='hidden xl:flex text-white font-bold items-center space-x-2  text-sm' >
                        <Grid2X2 size={20} />
                        <p>Department</p>

                    </Link>


                    <Link href={"/"} className='hidden xl:flex text-white font-bold items-center space-x-2  text-sm' >
                        <LayoutGrid size={20} />
                        <p>Services</p>

                    </Link>
                    <Link href={"/"} className=' flex  text-white font-bold items-center space-x-2  text-sm' >
                        <Heart size={20} />
                        <div>
                            <p className='text-xs font-extralight'>Reorder</p>
                            <p> My Item</p>
                        </div>
                    </Link>

                    <Link href={"/"} className=' flex text-white font-bold items-center space-x-2  text-sm' >
                        <User size={20} />
                        <div>
                            <p className='text-xs font-extralight'>Sign In</p>
                            <p> Account </p>
                        </div>
                    </Link>

                    <Link href={"/basket"} className=' flex text-white font-bold items-center space-x-2  text-sm' >
                        <ShoppingCart size={20} />
                        <div>
                            <p className='text-xs font-extralight'>
                                {cart.length > 0 ? `${cart.length} items ` : "No items"}
                            </p>
                            {/* <p> {total} </p> */}
                            <p>{cart.length > 0 ? `${total} ` : "0"}</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='h-[1px] max-md:hidden w-full bg-white'></div>
            <div className='flex flex-col max-md:hidden text-white font-light md:flex-row  bg-blue-500 items-center px-10 py-2 space-x-5'>
                <ul className='flex justify-between w-full'>
                    {lists.map((list) => (
                        <List key={list.key} title={list.title} />
                    ))}
                </ul>
            </div>
        </header>
    )
}



const List = ({ title }: Props) => {
    return (
        <>
            <Link className='hover:underline' href={{ pathname: "/search", query: { q: title } }} >
                {title}
            </Link>
        </>
    )
}




export default Header