"use client"


import { useCartStore } from "../store"
import { Product } from "../typings/productTyping"
import { Button } from "@/components/ui/button"


const RemoveFromCart = ({ product }: { product: Product }) => {

    const removeFromCard = useCartStore((state) =>
        state.removeFromCart
    );


    const handleRemove = () => {
        console.log("removing from cart", product.meta.sku);
        removeFromCard(product);
    };

    return (
        <Button className="bg-blue-500 hover:bg-blue-700" onClick={handleRemove} >
            -
        </Button >
    );
}

export default RemoveFromCart;