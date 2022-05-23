import { PostModel } from '../../data/models/post_model';

export interface TodoRepositoryInterface {
	getPostById(postId: string): Promise<PostModel>;
}
