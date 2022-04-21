import {createSlice} from '@reduxjs/toolkit'

const initState = []

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initState,
    reducers: {
        addTodo: (state, action) => {
            // const resData = action.payload
            // state.push(resData)

            return [...state, action.payload]
        },
        deleteTodo: (state, action) => {
            const dataNew = [...state]
            return dataNew.filter(item => item !== action.payload)
        },
    },
});

export const {addTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer