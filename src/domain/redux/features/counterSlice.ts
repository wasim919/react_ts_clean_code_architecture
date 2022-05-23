import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { di } from '../../../core/injection_container';
import { TodoModel } from '../../../data/models/post_model';
import { TodoRepository } from '../../../data/repository/todo_repository';
import type { RootState } from '../store';

interface CounterState {
	value: number;
	loading: boolean;
	error?: string;
	todo?: TodoModel;
}

const initialState: CounterState = {
	value: 0,
	loading: false,
	error: undefined,
	todo: undefined
};

export const getPostById = createAsyncThunk('counterSlice/getPostById', async (postId: string) => {
	return di.get(TodoRepository).getPostById(postId);
});

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		}
	},
	extraReducers: {
		[`${getPostById.fulfilled}`]: (state, action: PayloadAction<TodoModel>) => {
			state.loading = false;
			state.todo = action.payload;
		},
		[`${getPostById.rejected}`]: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
		},
		[`${getPostById.pending}`]: (state, action: PayloadAction<string>) => {
			state.loading = true;
		}
	}
	// extraReducers: (builder) => {
	// 	builder.addCase(getPostById.fulfilled, (state, action: PayloadAction<TodoModel>) => {
	// 		state.todo = action.payload;
	// 	});
	// }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
