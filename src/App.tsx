import Todos from './components/Todos';
import Header from './Header';
import NewTodo from './components/NewTodo';
import TodoContextProvider from './store/todos-context';
function App() {
	return (
		<TodoContextProvider>
			<div className='App'>
				<Header color='red' title='Todo with React Typescript' />
				<NewTodo />
				<Todos  />
			</div>
		</TodoContextProvider>
	);
}

export default App;
