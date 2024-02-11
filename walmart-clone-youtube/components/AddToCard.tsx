"use client"


import { Product } from "../typings/productTyping"
import { useCartStore } from "../store"
import { Button } from "@/components/ui/button";
import RemoveFromCart from "./RemoveFromCart";

const AddToCard = ({ product }: { product: Product }) => {
    const [cart, AddToCard] = useCartStore((state) => [
        state.cart,
        state.addToCart,
    ]);


    const howManyInCart = cart.filter(
        (item) => item.meta.sku === product.meta.sku
    ).length;

    console.log("how many in cart", howManyInCart);

    const handleAdd = () => {
        console.log("Adding to cart", product);
        AddToCard(product);
    };



    if (howManyInCart > 0) {
        return (
            <div className="flex space-x-5 items-center ">
                <RemoveFromCart product={product}/>
{/* <p>-</p> */}
                <span>{howManyInCart}</span>

                <Button className="bg-blue-500 hover:bg-blue-700" onClick={handleAdd}> + </Button>
            </div>
        );  }



    return (
        <Button  onClick={handleAdd}>AddToCard</Button>
    )
}

export default AddToCard