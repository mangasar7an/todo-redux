import { useGetfetchTodosQuery } from './api/todosApi'

function App() {
	const { data } = useGetfetchTodosQuery('')
	console.log(data)

	return <div>App</div>
}

export default App
