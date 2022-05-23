import { useAppDispatch, useAppSelector } from '../../../core/hooks/redux';
import { decrement, increment } from '../../../domain/redux/features/counterSlice';

import styles from './index.module.scss';

export function CounterComponent() {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<div className={styles.container}>
			<button onClick={() => dispatch(increment())}>+</button>
			<h2>{count}</h2>
			<button onClick={() => dispatch(decrement())}>-</button>
		</div>
	);
}
