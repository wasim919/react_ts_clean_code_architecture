import { useEffect } from 'react';
import { di } from '../../../core/injection_container';
import { TodoRepository } from '../../../data/repository/todo_repository';

function Dasbhoard() {
	useEffect(() => {
		fetchInitialData();
	}, []);

	const fetchInitialData = async () => {
		try {
			const response = await di.get(TodoRepository).getPostById('1');
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};
	return <div>Dashboard</div>;
}

export default Dasbhoard;
