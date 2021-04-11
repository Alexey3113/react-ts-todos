import React, { useEffect, useState } from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ITodo } from '../interfaces'

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    const addHandler = (title: string) => {
        const newTask = {id: Date.now(), completed: false, title}
        setTodos(prev => [newTask, ...todos])
    }

    const toggleHandler = (id: number) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
              todo.completed = !todo.completed
            }
            return todo
          })
        )
      }
    const removeHandler = (id: number) => {
        const isDelete = window.confirm("Вы точно хотите удалить ваше дело?")
        if(isDelete){setTodos(todos.filter(todo => todo.id !== id))}
    }
    // const onChangeCompleted = (id: number) => {
    //     debugger;
    //     setTodos(prev => prev.map(todo => {
            
    //         if(todo.id === id){
    //             todo.completed = !todo.completed
    //         }
    //         return todo
    //     }))
    // }

    return (
        <div>
            <TodoForm onAdd={addHandler} />

            <TodoList todos={todos} onChangeCompleted={toggleHandler} onRemove={removeHandler} />
        </div>
    )
}
