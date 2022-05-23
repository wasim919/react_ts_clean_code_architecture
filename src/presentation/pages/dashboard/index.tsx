import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/redux';
import { getPostById } from '../../../domain/redux/features/counterSlice';
import { CounterComponent } from '../../components';

import styles from './index.module.scss';

function Dashboard() {
	const todo = useAppSelector((state) => state.counter.todo);
	const loading = useAppSelector((state) => state.counter.loading);
	const error = useAppSelector((state) => state.counter.error);
	const dispatch = useAppDispatch();

	useEffect(() => {
		fetchInitialData();
	}, []);

	const fetchInitialData = async () => {
		try {
			dispatch(getPostById('1'));
		} catch (error) {
			console.error(error);
		}
	};

	if (loading === true) {
		return <span>Loading...</span>;
	}

	if (error) {
		return <span>{error}</span>;
	}

	return (
		<div className={styles.container}>
			Dashboard
			<pre>{JSON.stringify(todo, null, 2)}</pre>
			<CounterComponent />
		</div>
	);
}

export default Dashboard;
