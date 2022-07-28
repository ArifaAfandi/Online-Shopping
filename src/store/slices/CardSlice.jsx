import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"

const cardState = {
    cardItem: [],
    prices: [],
    favoriteItems: [],
    totalCount: 0,
    totalPrice: 0
}

const cardSlice = createSlice({
    name: "card",
    initialState: cardState,
    reducers: {
        itemCount(state, action) {
            const itemIndex = state.cardItem.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cardItem[itemIndex].cardQuantity += 1
                toast.info("Məhsul sayı artırıldı", { position: "bottom-left" })
            }
            else {
                const productCopy = { ...action.payload, cardQuantity: 1 }
                state.cardItem.push(productCopy)
                state.totalCount += 1
                toast.success("Məhsul əlavə edildi", { position: "bottom-left" })
                state.prices.push({ price: action.payload.price, id: action.payload.id })
            }
        },

        basketQuantity(state, action) {
            const itemIndex = state.cardItem.findIndex((item) => item.id === action.payload.id)
            if (action.payload.isIncreased) {
                state.cardItem[itemIndex].cardQuantity += 1
            }
            else {
                state.cardItem[itemIndex].cardQuantity -= 1
            }
        },

        deleteProduct(state, action) {
            const itemId = action.payload
            state.cardItem = state.cardItem.filter((item) => item.id !== itemId)
            state.prices = state.prices.filter((item) => item.id !== itemId)
            state.totalCount -= 1
        },

        calPrice(state, action) {
            const itemIndex = state.cardItem.findIndex((item) => item.id === action.payload)
            let price = state.prices[itemIndex].price * state.cardItem[itemIndex].cardQuantity
            state.cardItem[itemIndex].price = price
        },

        totalPrice(state) {
            let total = 0
            state.cardItem.forEach((item) => {
                total += item.price
            })
            state.totalPrice = total
        },

        clearAll(state) {
            state.cardItem = []
            state.prices = []
            state.totalCount = 0
        },

        clearFavs(state) {
            state.favoriteItems = []
        },

        addToFavorites(state, action) {
            const itemIndex = state.favoriteItems.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.favoriteItems = state.favoriteItems.filter((item) => item.id !== action.payload.id)
                toast.info("Məhsul favorilərdən çıxarıldı", { position: "bottom-left" })
            }
            else {
                const productCopy = { ...action.payload }
                state.favoriteItems.push(productCopy)
                toast.success("Məhsul favorilərə əlavə olundu", { position: "bottom-left" })
            }
        },

        deleteFavorite(state, action) {
            const itemId = action.payload
            state.favoriteItems = state.favoriteItems.filter((item) => item.id !== itemId)
        }

    }
})

export const { itemCount, basketQuantity, deleteProduct, totalPrice, calPrice, clearAll, clearFavs, addToFavorites, deleteFavorite } = cardSlice.actions;

export default cardSlice.reducer; 