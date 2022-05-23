import { TodoModel } from '../../models/post_model';

export interface TodoDataSourceInterface {
	getPost(postId: string): Promise<TodoModel>;
}
