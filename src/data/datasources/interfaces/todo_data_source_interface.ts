import { PostModel } from '../../models/post_model';

export interface TodoDataSourceInterface {
	getPost(postId: string): Promise<PostModel>;
}
