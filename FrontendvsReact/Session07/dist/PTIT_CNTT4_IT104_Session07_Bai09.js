class User {
    constructor(id, posts = [], followers = []) {
        this.id = id;
        this.posts = posts;
        this.followers = followers;
    }
    createPost(newPost) {
        this.posts.push(newPost);
    }
    comment(postId, cmtContent) {
        const targetPost = this.posts.find(post => post.id === postId);
        if (targetPost) {
            targetPost.addComment(cmtContent);
        }
        else {
            console.log(`Ko tim thay id`);
        }
    }
    follow(user) {
        this.followers.push(user);
    }
    likePost(postId) {
        const postToLike = this.posts.find(post => post.id === postId);
        if (postToLike) {
            postToLike.addLike(this);
        }
        else {
            console.log(`Ko tim thay id`);
        }
    }
    viewFeed() {
        this.followers.forEach(follower => {
            follower.posts.forEach(post => {
                console.log(`  Post id: ${post.id} - noi dung: ${post.content}`);
            });
        });
    }
}
class Post {
    constructor(id, comments = [], likes = [], userPostId, content) {
        this.id = id;
        this.comments = comments;
        this.likes = likes;
        this.userPostId = userPostId;
        this.content = content;
    }
    addLike(userLike) {
        if (userLike) {
            this.likes.push(userLike);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
class Comments {
    constructor(id, userId, content, replies = []) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = replies;
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
const users = new User(10, [], []);
users.createPost(new Post(1, [], [], users.id, "good"));
users.posts.forEach(post => {
    console.log(`Post id: ${post.id}, content: ${post.content}`);
});
