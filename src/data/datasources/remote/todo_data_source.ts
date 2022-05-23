import 'reflect-metadata';
import { injectable } from 'inversify';
import { fetchRest } from '../../clients/rest_client';
import { PostModel } from '../../models/post_model';
import { TodoDataSourceInterface } from '../interfaces/todo_data_source_interface';

@injectable()
export class TodoDataSource implements TodoDataSourceInterface {
	async getPost(postId: string): Promise<PostModel> {
		try {
			const res = await fetchRest(`https://jsonplaceholder.typicode.com/posts/${postId}`);
			return PostModel.fromJson(res);
		} catch (error) {
			throw error;
		}
	}
}
