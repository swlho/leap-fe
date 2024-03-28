export interface IPost {
    topic_id: string;
    post_body: string;
    title: string;
    user_id: string;
    votes: number;
    post_image: string;
    type: any[];
}

export class Post implements IPost {
    topic_id: string;
    post_body: string;
    title: string;
    user_id: string;
    votes: number;
    post_image: string;
    type: any[];

    constructor(
        topic_id: string,
        post_body: string,
        title: string,
        user_id: string,
        votes: number = 0,
        post_image: string,
        type: any[]
    ) {
        this.topic_id = topic_id;
        this.post_body = post_body;
        this.title = title;
        this.user_id = user_id;
        this.votes = votes;
        this.post_image = post_image;
        this.type = type;
    }
}

export interface IUser {
    username: string;
    password: string;
    email: string;
}
export class User implements IUser {
    username: string;
    password: string;
    email: string;

    constructor(
        username: string,
        password: string,
        email: string
    ) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}