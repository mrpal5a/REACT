import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    //we will add new todo, along with previous todo means previous todo should remain in array while adding new todo, that can be done by below method, that is also covered in special video by hitesh choudhary in chai-aur-react series, 8 minute video saying "interview question"
    setTodos((prev) => [{...todo}, ...prev])
  }

  const updateTodo = (id, todo) =>{
    //LOGIC : prev ek todos array, us mai hum har ek todo ke uper traverse kar rahe hai map function use krke, or hamara prevTodo ek sigle todo, todo array ka ek todo hai, uski id hum compare kar rahe, hamare todo se, or agar match hoti hai iska matlab hame wahi todo update krna hai to usko hum update kar denge jo todo aya hai hamare updateTodo ke liye or agar match nahi hoti hai to jaisa hai waisa hi rehne denge, mtlb prevTodo hi rehne denge
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)) // mtlb jo id match nahi hogi usko remove kr dega or baaki saare todos ko rehne dega
  }

  const toggleComplete = (id) =>{ 
    // mtlb jis todo ko toggle krna hai, uspe jayenge id ke through and phir us particular todo ko spread karenge and other values ko as it is rehne denge and completed wale ko toggle kr denge, mtlb true and false values hi hai to ek exclamatory mark (!) lagane se wo toggle ho jayenge mtlb true ka false and false ka true ho jayegi
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed} : prevTodo))
  }

  //using browsers localstorage to store TODOS
  useEffect(()=>{
    const allTodos = JSON.parse(localStorage.getItem("todos")) //here "todos" is a key name

    if(allTodos && allTodos.length > 0){
      setTodos(allTodos)
    }
  },[])

  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos)) // in setItem we are passing key value pair and key name should be same as we had passed in getItem
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}} >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
             <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id} className="w-full" >
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
