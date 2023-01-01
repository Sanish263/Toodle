import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import InputField from '../components/InputField'
import TodoList from '../components/TodoList'
import { Todo } from '../interfaces/interfaces'

const Home: NextPage = () => {

  const [todo, setTodo] = useState<string>('');
  const [todoes, setTodoes] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent)=> {
    e.preventDefault();

    if(todo) {
      setTodoes([...todoes, {id: Date.now(), todo, isDone:false}])
      setTodo("");
    }
  } 

  console.log(todoes);

  return (
    <div className=" flex flex-col items-center bg-[#F4908A] w-screen h-screen font-neucha">
      <Head>
        <title>Toodle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <span className=' uppercase text-5xl m-8 text-white z-10 text-center underline underline-offset-[6px] md:m-4 md:text-4xl'>Toodle</span>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todoes={todoes} setTodoes={setTodoes}/>

    </div>
  )
}

export default Home
