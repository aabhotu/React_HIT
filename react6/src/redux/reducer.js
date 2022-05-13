const initState = []

const toDoReducer =(state=initState, action) =>{
    switch (action.type) {
        case 'addTodo':
            return[...state, action.payload]
        case 'deleteTodo':{
            const newArr= [...state]
            return newArr.filter(item =>item !== action.payload)
        }
        default:
            return state;
    }
}
export default toDoReducer