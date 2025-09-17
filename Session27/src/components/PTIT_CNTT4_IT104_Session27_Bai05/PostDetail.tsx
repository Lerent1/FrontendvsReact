import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function PostDetail() {
  const { id } = useParams();
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  const post = posts.find((p: any) => p.id === Number(id));

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to="/blog/posts">Quay về danh sách bài viết</Link>
    </div>
  );
}