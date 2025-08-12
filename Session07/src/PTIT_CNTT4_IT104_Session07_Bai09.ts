class User {
    public id: number;
    public posts: Post[];
    public followers: User[];
    constructor(id: number, posts: Post[] = [], followers: User[] = []) {
        this.id = id;
        this.posts = posts;
        this.followers = followers;
    }
    createPost(newPost: Post): void {
        this.posts.push(newPost);
    }
    comment(postId: number, cmtContent: string): void {
        const targetPost = this.posts.find(post => post.id === postId);
        if (targetPost) {
            targetPost.addComment(cmtContent);
        } else {
            console.log(`Ko tim thay id`);
        }
    }
    follow(user: User): void {
        this.followers.push(user);
    }
    likePost(postId: number): void {
        const postToLike = this.posts.find(post => post.id === postId);
        if (postToLike) {
            postToLike.addLike(this);
        } else {
            console.log(`Ko tim thay id`);
        }
    }
    viewFeed(): void {
        this.followers.forEach(follower => {
            follower.posts.forEach(post => {
                console.log(`  Post id: ${post.id} - noi dung: ${post.content}`);
            });
        });
    }
}

class Post {
    public id: number;
    public comments: string[];
    public likes: User[];
    public userPostId: number;
    public content: string;
    constructor(id: number, comments: string[] = [], likes: User[] = [], userPostId: number, content: string) {
        this.id = id;
        this.comments = comments;
        this.likes = likes;
        this.userPostId = userPostId;
        this.content = content;
    }
    addLike(userLike: User): void {
        if (userLike) {
            this.likes.push(userLike);
        }
    }
    addComment(comment: string): void {
        this.comments.push(comment);
    }
}

class Comments {
    public id: string;
    public userId: string;
    public content: string;
    public replies: string[];
    constructor(id: string, userId: string, content: string, replies: string[] = []) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = replies;
    }
    addReply(reply: string): void {
        this.replies.push(reply);
    }
}

const users = new User(10, [], []);
users.createPost(new Post(1, [], [], users.id, "good"));
users.posts.forEach(post => {
    console.log(`Post id: ${post.id}, content: ${post.content}`);
});