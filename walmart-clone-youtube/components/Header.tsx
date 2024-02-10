import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Grid2X2, Heart, LayoutGrid, Search, ShoppingCart, User } from 'lucide-react'

const Header = () => {
    return (
        <header className='flex flex-col md:flex-row  bg-blue-500 items-center px-10 py-2 space-x-5'>

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


      <form className='flex items-center px-5  bg-white  rounded-full w-full flex-1' action="">
                <input className='flex-1 rounded-full placeholder:text-sm' type="text" placeholder="Search Everything..."  />
              
                    <button type='submit'> <Search className='rounded-full h-10  px-2 w-10 bg-yellow-400  cursor-pointer'></Search> </button>

            </form>
     
<div className='flex space-x-5 p-5 items-center justify-center  mt-5 md:mt-0 '>
    <Link href={"/"} className='hidden xl:flex text-white font-bold items-center space-x-2  text-sm' >
<Grid2X2 size={20}/>
<p>Department</p>

    </Link>


    <Link href={"/"} className='hidden xl:flex text-white font-bold items-center space-x-2  text-sm' >
<LayoutGrid size={20}/>
<p>Services</p>

    </Link>


    
    <Link href={"/"} className=' flex  text-white font-bold items-center space-x-2  text-sm' >
<Heart size={20}/>
<div>
<p className='text-xs font-extralight'>Reorder</p>
<p> My Item</p>
</div>
    </Link>

    <Link href={"/"} className=' flex text-white font-bold items-center space-x-2  text-sm' >
<User size={20}/>
<div>
<p className='text-xs font-extralight'>Sign In</p>
<p> Account </p>
</div>
    </Link>

    <Link href={"/"} className=' flex text-white font-bold items-center space-x-2  text-sm' >
<ShoppingCart size={20}/>
<div>
<p className='text-xs font-extralight'>No Items</p>
<p> $0.00 </p>
</div>
    </Link>


</div>


        </header>
    )
}

export default Header