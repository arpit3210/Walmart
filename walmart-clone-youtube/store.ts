import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
// import AddToCard from './components/AddToCard';
import { Product } from './typings/productTyping';

// interface Product {
//     id: number;
//     name: string;
//     price: number;
// }

interface CardState {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
}

 export const useCartStore = create<CardState>()(
    devtools(
        persist(
            (set, get) => ({
                bears: 0,
                cart: [],

                addToCart: (product) => {
                    set((state) => ({
                        cart: [...state.cart, product],
                    }));
                },
                removeFromCart: (product) => {
                    const productToRemove = get().cart.findIndex((p) => p.meta.sku === product.meta.sku);

                    set((state) => {
                        const newCart = [...state.cart];

                        newCart.splice(productToRemove, 1);
                        return { cart: newCart };
                    })
                },
            }),
            {
                name: 'bear-storage',
            },
        ),
    ),
);