import { useState } from 'react'
import './App.css'
import ToDo from './components/ToDo'
import ToDoForm from './components/ToDoForm'




const App: React.FC = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade",
      category: "Trabalho",
      isCompleted: false
    },
    {
      id: 2,
      text: "Estudar SI",
      category: "Estudo",
      isCompleted: false
    },
    {
      id: 3,
      text: "Passear cachorro",
      category: "Pessoal",
      isCompleted: false
    }

  ])

  return (
    <div className='flex justify-center mt-4'>
      <div className='bg-white w-3/4 rounded-lg px-10 pb-10'>
      <h1 className='text-3xl lg:text-4xl my-5 text-center '>To do list</h1>
        <div className='flex justify-center flex-col items-center '>
          
          <div className='w-full '>
            {todos.map((todo) => (
              <ToDo todo={todo} />
            ))}

          </div>
          
        </div>
        <div className='border-t-2'></div>
        <ToDoForm />
      </div>
    </div>


  )
}

export default App
