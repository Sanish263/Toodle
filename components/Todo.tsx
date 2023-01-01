import React, { useEffect, useRef, useState } from 'react'
import { TodoProps } from '../interfaces/interfaces'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/outline'


const Todo:React.FC<TodoProps> = ({ todo, todoes, setTodoes }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit]);

    const handleDone = (id: number) => {
        setTodoes(
            todoes.map((todo) => 
                todo.id === id? { ...todo, isDone:!todo.isDone} : todo 
            )
        );
    };
    
    const handleDelete = (id: number) => {
        setTodoes(todoes.filter((todo) => todo.id !== id))
    }

    const handleEdit = (e:React.FormEvent<HTMLFormElement>, id:number) => {
        e.preventDefault();
        setTodoes(todoes.map(
            (todo)=> todo.id === id? {...todo, todo:editTodo}: todo))
        setEdit(false);
        };

    return (
        //todos_single -> todos_single-text
        <form 
            onSubmit={(e)=> handleEdit(e, todo.id)}
            className={`${todo.isDone ? "opacity-80 shadow-none" : "opacity-100"} flex bg-[#FFE4DF] p-5 w-full sm:w-2/5 rounded-md mt-10 border-none shadow-sm shadow-red-400`}>
            {
                edit ? (
                    <input
                        ref={inputRef} 
                        value={editTodo}
                        onChange={(e)=> setEditTodo(e.target.value)}
                        className=" outline-none flex-1 rounded-md"
                        />
                ) : (
                    
                    todo.isDone ? (
                        <div className='flex-1 sm:flex line-through'>
                            <span className='p-2 border-none text-xl'>{todo.todo}</span>
                        </div> 
                        ) : (
                        <div className=' flex-1 sm:flex'>
                            <span className='p-2 border-none text-xl'>{todo.todo}</span>
                        </div> 
                        )
                    
                )
            }

                <div className='flex items-center space-x-2 ml-3 cursor-pointer'>
                    <span 
                        onClick={()=> {
                            !edit && !todo.isDone ? setEdit(!edit) : setEdit(!edit)
                        }}
                        className='h-4 w-4 sm:h-5 sm:w-5  transition hover:scale-125 ease-in'><PencilSquareIcon /></span>
                    <span 
                        onClick={()=> handleDelete(todo.id)}
                        className='h-4 w-4 sm:h-5 sm:w-5 transition hover:scale-125 ease-in'><TrashIcon /></span>
                    <span 
                        onClick={()=> {handleDone(todo.id)}}
                        className='h-4 w-4 sm:h-5 sm:w-5 transition active:scale-125 ease-out duration-300 '><CheckCircleIcon /></span>
                </div>

        </form>
    )
}

export default Todo
//bg-opacity-50 bg-clip-padding style="backdrop-filter: blur(20px);"
//[#8AEEF4]
//#FFE4DF
//#CDF6FF
//#FDE9EB
//#FFF6F4