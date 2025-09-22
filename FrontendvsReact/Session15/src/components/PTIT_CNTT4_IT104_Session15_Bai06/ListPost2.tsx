import React, { Component } from "react";
import DetailPost2 from "./DetailPost2";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type State = {
  posts: Post[];
};

export default class ListPost2 extends Component<{}, State> {
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
            "Props giup chuyen du lie component cha xuong component con",
          author: "Linda",
        },
        {
          id: 3,
          title: "State trong ReactJS la gi",
          content: "State giup luu tru trang thai component",
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
          <DetailPost2 key={post.id} post={post} />
        ))}
      </div>
    );
  }
}