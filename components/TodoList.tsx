import React from 'react'
import { ITodoProps } from '../interfaces/interfaces'
import Todo from './Todo'

const TodoList:React.FC<ITodoProps> = ({ todoes, setTodoes }) => {
    return (
        <div className=' sm:w-11/12 flex justify-evenly w-11/12 flex-wrap'>
            {todoes.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    todoes={todoes}
                    setTodoes={setTodoes} />
            ))}
        </div>
    )
}

export default TodoList

//flex justify-evenly w-11/12 flex-wrap