import React from "react";
import { useHistory } from "react-router";
import { ITodo } from "../interfaces";

type TodoListProps = {
  todos: ITodo[]
  onChangeCompleted: (id: number) => void
  onRemove: (id: number) => void
};

export const TodoList: React.FC<TodoListProps> = ({ todos, onChangeCompleted, onRemove }) => {
    const onDeleteTask = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        onRemove(id)
    } 
    const history = useHistory()
    if(todos.length === 0){
        return <p className="center ">Пока дел нет</p>
    }
  return (
    <ul>
      {todos.map((todo) => {
          const classes = ["todo"]
          if(todo.completed){
              classes.push("completed")
          }
          
       return (<li className={classes.join(" ")} key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={onChangeCompleted.bind(null, todo.id)}
            />
            <span>{todo.title}</span>
            <i
              className="material-icons red-text"
              onClick={event => onDeleteTask(event, todo.id)}
            >
              delete
            </i>
          </label>
        </li>)
      })}
      <div className="buttons">
          <button className="btn" onClick={() => history.push("/javascript")}>JavaScript</button>
          <button className="btn mgl20" onClick={() => history.push("/about")}>О нас</button>
      </div>
    </ul>
  );
};
