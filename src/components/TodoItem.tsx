import React, { useContext } from 'react';
import Todo from '../models/todo';
import s from './../styles/TodoItem.module.css';
import { TodoContext } from '../store/todos-context';
const TodoItem: React.FC<{
	item: Todo;
}> = props => {
	const todoctx = useContext(TodoContext);
	return (
		<li
			className={s.item}
			onClick={e => {
				todoctx.removeTodo(e, props.item.id);
			}}>
			{props.item.text}
		</li>
	);
};

export default TodoItem;
