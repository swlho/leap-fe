export class Post {
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

export class Pond {
    id: string;
    topic_name: string;
    summary: string;

    constructor(
        id: string,
        topic_name: string,
        summary: string
    )   {
        this.id = id;
        this.topic_name = topic_name;
        this.summary = summary;
    }
}

export class User {
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

export class Comment {
    comment_body: string;
    user_id: string;
    post_id: string;
    votes: string;

    constructor(
        comment_body: string,
        user_id: string,
        post_id: string,
        votes: string
    ) {
        this.comment_body = comment_body;
        this.user_id = user_id;
        this.post_id = post_id;
        this.votes = votes
    }
}