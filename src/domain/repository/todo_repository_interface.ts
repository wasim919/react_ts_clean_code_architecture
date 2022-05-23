import { TodoModel } from '../../data/models/post_model';

export interface TodoRepositoryInterface {
	getPostById(postId: string): Promise<TodoModel>;
}
