import { CartItem } from "../redux/slices/cartSlice"

export const findItemInCart = (items: CartItem[], id: string) => {
      return items.find((obj) => obj.id === id)
}