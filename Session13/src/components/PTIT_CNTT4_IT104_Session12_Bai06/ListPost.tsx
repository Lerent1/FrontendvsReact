import React, { Component } from "react";
import DetailPost from "./DetailPost";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type State = {
  posts: Post[];
};

export default class ListPost extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "Tai sao nen hoc ReactJS",
          content: "Hoc ReactJS de di lam",
          author: "David",
        },
        {
          id: 2,
          title: "Props trong ReactJS",
          content:
            "Props giup chuyen du lieu tu component cha xuong component con",
          author: "Linda",
        },
        {
          id: 3,
          title: "State trong ReactJS la gi",
          content: "State giup tru trang thai trong mot component",
          author: "David",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Danh sach bai viet</h2>
        {this.state.posts.map((post) => (
          <DetailPost key={post.id} post={post} />
        ))}
      </div>
    );
  }
}