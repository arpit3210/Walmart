import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'

const Header = () => {
    return (
        <header className='flex  bg-walmart '>

            {/* <Button>Sign In</Button> */}

            <Link href="/">
                <Image
                    src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg"
                    alt='Logo'
                    width={200}
                    height={200}
                    className='bg-blue-500'
                />
            </Link>
            {/* https://www.youtube.com/watch?v=LWT1LGMmzNk */}

            <form className='flex items-center bg-white rounded-full w-full flex-1' action="">
                <input className='flex-1' type="text" placeholder="Search Everything..." />
                <button> <Search className='rounded-full h-10'></Search> </button>


            </form>


        </header>
    )
}

export default Header