import React, { useRef,useContext } from 'react'
import s from "./../styles/NewTodo.module.css"
import { TodoContext } from '../store/todos-context';
const NewTodo:React.FC = () => {
    const inpRef = useRef<HTMLInputElement>(null);
    const todoctx = useContext(TodoContext);
    const submithandler = (e:React.FormEvent):void => {
        e.preventDefault();
        const value = inpRef.current!.value;
        //'!' tells typescript that the value inside the reference cannot be null at this point 
        if (value.length === 0) {
            return;
        }
        else {
            todoctx.addTodo(value);
            inpRef.current!.value = "";
        }
    }
  return (
      <form onSubmit={submithandler} className={s.form}>
          <label htmlFor="todo" >Todo</label>
          <input type="text" id="todo" ref={inpRef} />
          <button type="submit" >Add</button>
    </form>
  )
}

export default NewTodo