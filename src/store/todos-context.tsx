import React,{useState} from 'react';
import Todo from '../models/todo';
type TodosTypeContext = {
    items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (e: React.MouseEvent, id: string) => void;
}

export const TodoContext = React.createContext<TodosTypeContext>({
	items: [],
	addTodo: () => {},
	removeTodo: () => {},
});
const TodoContextProvider: React.FC<{children:React.ReactElement}> = props => {
	const [todo, setTodo] = useState<Todo[]>([]);
	const addtodoHandler = (text: string) => {
		setTodo(p => {
			return [...p, new Todo(text)];
		});
	};
	const removetodoHandler = (e: React.MouseEvent, id: string): void => {
		setTodo(prevtodo => prevtodo.filter(todo => todo.id !== id));
	};
	const contextvalue: TodosTypeContext = {
		items: todo,
		addTodo: addtodoHandler,
		removeTodo: removetodoHandler,
	};
	return (
		<TodoContext.Provider value={contextvalue}>
			{props.children}
		</TodoContext.Provider>
	);
};
export default TodoContextProvider;