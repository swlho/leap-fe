export interface IPost {
    topic_id: string;
    post_body: string;
    title: string;
    user_id: string;
    votes: number;
    post_image: string;
    type: any[];
}

export interface IPond {
    id: string;
    topic_name: string;
    summary: string;
}

export interface IBook {
    id: string;
    snippet: string;
    title: string;
    link: string;
    authors: [{
        name: string;
    }];

}

export class Book implements IBook {
    id: string;
    snippet: string;
    title: string;
    link: string;
    authors: [{
        name: string;
    }];


    constructor(
        id: string,
        snippet: string,
        title: string,
        link: string,
        authors: [{
            name: string;
        }]

    ) {
        this.id = id;
        this.snippet = snippet;
        this.title = title;
        this.link = link;
        this.authors = authors;
    }
}

export class Post implements IPost {
    id: string;
    topic_id: string;
    post_body: string;
    title: string;
    user_id: string;
    votes: number;
    post_image: string;
    type: any[];

    constructor(
        id: string,
        topic_id: string,
        post_body: string,
        title: string,
        user_id: string,
        votes: number = 0,
        post_image: string,
        type: any[]
    ) {
        this.id = id;
        this.topic_id = topic_id;
        this.post_body = post_body;
        this.title = title;
        this.user_id = user_id;
        this.votes = votes;
        this.post_image = post_image;
        this.type = type;
    }
}

export class Pond implements IPond {
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