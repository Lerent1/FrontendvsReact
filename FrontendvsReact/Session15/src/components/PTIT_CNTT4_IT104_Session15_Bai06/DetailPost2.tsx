import React, { Component } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type Props = {
  post: Post;
};

export default class DetailPost2 extends Component<Props> {
  render() {
    const { post } = this.props;
    return (
      <div>
        <p><b>Id:</b> {post.id}</p>
        <p><b>Title:</b> {post.title}</p>
        <p><b>Content:</b> {post.content}</p>
        <p><b>Author:</b> {post.author}</p>
        <hr />
      </div>
    );
  }
}