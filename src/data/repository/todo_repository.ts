import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { TodoDataSource } from '../datasources/remote/todo_data_source';
import { TodoModel } from '../models/post_model';
import { TodoRepositoryInterface } from '../../domain/repository/todo_repository_interface';

@injectable()
export class TodoRepository implements TodoRepositoryInterface {
	@inject(TodoDataSource)
	private todoDataSource: TodoDataSource;

	getPostById(postId: string): Promise<TodoModel> {
		return this.todoDataSource.getPost(postId);
	}
}
