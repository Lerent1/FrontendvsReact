import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  image: string;
  date: string;
  status: boolean;
};

export default function ListPost() {
  const [show, setShow] = useState(false);
  const [editing, setEditing] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [form, setForm] = useState<Omit<Post, "id">>({
    title: "",
    image: "",
    date: "",
    status: false,
  });

  const [search, setSearch] = useState("");

  const handleClose = () => {
    setShow(false);
    setEditing(null);
    setForm({ title: "", image: "", date: "", status: false });
  };
  const handleShow = () => setShow(true);

  async function getAllPost() {
    try {
      const response = await axios.get("http://localhost:8080/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Lỗi tải bài viết", error);
    }
  }

  useEffect(() => {
    getAllPost();
  }, []);

  const handleSave = async () => {
    if (!form.title.trim() || !form.image.trim()) {
    alert("Ko được để trống");
    return;
    }
    if (editing) {
      await axios.put(`http://localhost:8080/posts/${editing.id}`, {
        ...form,
      });
    } else {
      await axios.post("http://localhost:8080/posts", {
        ...form,
        date: new Date().toLocaleDateString(),
      });
    }
    await getAllPost();
    handleClose();``
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này")) {
      await axios.delete(`http://localhost:8080/posts/${id}`);
      getAllPost();
    }
  };

  const handleBlock = async (item: Post) => {
    if (window.confirm("Bạn có chắc ko")) {
      await axios.patch(`http://localhost:8080/posts/${item.id}`, {
      status: !item.status,
      });
      getAllPost();
    }
  };

  const handleEdit = (item: Post) => {
    setEditing(item);
    setForm({
      title: item.title,
      image: item.image,
      date: item.date,
      status: item.status,
    });
    setShow(true);
  };

  const filteredPosts = posts.filter((p) => {
    const matchTitle = p.title.toLowerCase().includes(search.toLowerCase());
    return matchTitle;
  });

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
      &nbsp;
      <select>
        <option value="">Tất cả</option>
        <option value="true">Đã xuất bản</option>
        <option value="false">Chưa xuất bản</option>
      </select>
      &nbsp;
      <Button variant="primary" onClick={handleShow}>
        Thêm bài viết
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editing ? "Sửa bài viết" : "Thêm bài viết"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control type="text" value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hình ảnh</Form.Label>
              <Form.Control type="text" value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check label="Đã xuất bản" checked={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.checked })}></Form.Check>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {editing ? "Cập nhật" : "Lưu"}
          </Button>
        </Modal.Footer>
      </Modal>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Hình ảnh</th>
            <th>Ngày viết</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>
                <img src={item.image} alt={item.image} width="80" />
              </td>
              <td>{item.date}</td>
              <td>{item.status ? "Đã xuất bản" : "Chưa xuất bản"}</td>
              <td>
                <Button variant="warning" onClick={() => handleBlock(item)}>
                  {item.status ? "Chặn" : "Bỏ chặn"}
                </Button> &nbsp;
                <Button variant="success" onClick={() => handleEdit(item)}>Sửa</Button> &nbsp;
                <Button variant="danger" onClick={() => handleDelete(item.id)}>Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}