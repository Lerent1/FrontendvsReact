import React from 'react';
import { Link } from 'react-router-dom';

export default function Post() {
  const posts = [
    { 
      id: 1, 
      title: "React Basics", 
      excerpt: "Giới thiệu cơ bản về React.", 
      content: "React là một thư viện JavaScript để xây dựng giao diện người dùng."
    },
    { 
      id: 2, 
      title: "React Basics", 
      excerpt: "Giới thiệu cơ bản về React.", 
      content: "React là một thư viện JavaScript để xây dựng giao diện người dùng."
    },
    { 
      id: 3, 
      title: "React Basics", 
      excerpt: "Giới thiệu cơ bản về React.", 
      content: "React là một thư viện JavaScript để xây dựng giao diện người dùng."
    },
  ];
  localStorage.setItem("posts", JSON.stringify(posts));

  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/posts/${post.id}`}>
              {post.title}
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}