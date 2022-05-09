import Todo from '../models/todo';
import TodoItem from './TodoItem';
import { TodoContext } from '../store/todos-context';
import s from './../styles/Todos.module.css';
import {useContext} from 'react'

const Todos: React.FC = props => {
	const todoctx = useContext(TodoContext);
	return (
		<ul className={s.todos}>
			{todoctx.items.map((item:Todo) => (
				<TodoItem key={item.id} item={item}  />
			))}
		</ul>
	);
};

export default Todos;
