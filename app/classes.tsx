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