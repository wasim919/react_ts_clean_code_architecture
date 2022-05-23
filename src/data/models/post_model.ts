export class PostModel {
	userId?: string;
	id?: string;
	title?: string;
	body?: string;
	constructor(userId?: string, id?: string, title?: string, body?: string) {
		this.userId = userId;
		this.id = id;
		this.title = title;
		this.body = body;
	}

	static fromJson(json: Object): PostModel {
		return Object.assign(new PostModel(), json);
	}
}
