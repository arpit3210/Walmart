"use client"


import { getCartTotal } from '@/lib/getCartTotal';
import { useCartStore } from '../store'
import { groupBySKU } from '@/lib/groupBySKU';
import Image from 'next/image';
import AddToCard from './AddToCard';
import { Button } from '@/components/ui/button';

const Basket = () => {
    const cart = useCartStore((state) => state.cart);
    const grouped = groupBySKU(cart);
    const basketTotal = getCartTotal(cart);


    console.log(cart);
    console.log(grouped);

    return (
        <div className='max-w-7xl mx-auto'>

            <ul className='space-y-5 divide-y-2'>
                {Object.keys(grouped).map((sku) => {
                    const item = grouped[sku][0];
                    const total = getCartTotal(grouped[sku]);


                    return (
                        <li key={sku}
                            className='p-5 my-2 flex items-center justify-between '
                        >

                            {item.images[0] && (
                                <Image
                                    src={item.images[0]}
                                    alt={item.title}
                                    width={100}
                                    height={100} />

                            )}

                            <div className='flex space-x-4 pl-4'>
                                <div>
                                    <p className='line-clamp-3 text-lg font-medium'>{item.title}</p>
                                    <div dangerouslySetInnerHTML={{ __html: item.description }}
                                        className="line-clamp-1  font-light text-sm mt-2 "
                                    />
                                </div>



                                <div className='flex flex-col border rounded-md p-5'>
                                    <AddToCard product={item} />

                                    <p className='mt-4 font-bold text-right '>{total}</p>
                                </div>
                            </div>


                        </li>
                    );

                })}
            </ul>


<div className='flex flex-col justify-end p-5'>
<p className='font-bold text-blue-500 text-2xl text-right  mb-5 '>
Total: {basketTotal}
</p>
<Button className='mt-5 h-20 bg-blue-500 hover:bg-blue-700' >
    Proceed to Checkout 
</Button>


</div>


        </div>
    )
}

export default Basket