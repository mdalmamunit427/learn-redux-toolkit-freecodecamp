import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        name: "Casual T-shirt",
        price: 100,
        category: "Gadgets",
        image: "https://plus.unsplash.com/premium_photo-1718913931807-4da5b5dd27fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2021-05-12",
    },
    {
        id: 2,
        name: "Smartwatch",
        price: 200,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2021-05-15",
    },
    {
        id: 3,
        name: "Smart Home Hub",
        price: 150,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1545259742-b4fd8fea67e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2021-05-18",
    }
]

const productSlice =  createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push({
                id: state.length > 0 ? state[state.length - 1].id: 1,
                ...action.payload
            })
        }
    }
})

export const {addProduct} = productSlice.actions;

export default productSlice.reducer