import { configureStore } from "@reduxjs/toolkit"
import { cardReducer } from "./CardSlicer"
export const store = configureStore({
    reducer: cardReducer
})