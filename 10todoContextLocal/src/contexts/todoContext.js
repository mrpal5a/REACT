import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: "Todo message",
            completed:false
        }
    ],
    // we only write functions name here in Context API. There defination is written where we want to use them as we also had done similarly in 09themeswitcher context API also while changing the theme
    addTodo : (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo:(id) =>{},
    toggleComplete:(id) =>{}

})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider