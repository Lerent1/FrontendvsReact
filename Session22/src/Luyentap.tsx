import { Button, Input } from "antd";
import { PencilLine, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { v7 as uuid } from "uuid";

interface Task {
  id: string;
  name: string;
  isCompleted: boolean;
}

export default function Luyentap() {
  const [task, setTask] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Trạng thái sửa
  const [editId, setEditId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
    if (!e.target.value) {
      setError("Tên công việc không được để trống");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) {
      setError("Tên công việc không được để trống");
      return;
    }
    const newTask: Task = {
      id: uuid(),
      name: task.trim(),
      isCompleted: false,
    };
    const updated = [...tasks, newTask];
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    setTask("");
    setError("");
  };

  const handleDelete = (id: string) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const handleEdit = (id: string, name: string) => {
    setEditId(id);
    setEditValue(name);
  };

  const handleEditSave = (id: string) => {
    if (!editValue.trim()) {
      setError("Tên công việc không được để trống");
      return;
    }
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, name: editValue } : t
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    setEditId(null);
    setEditValue("");
    setError("");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[1500px] border border-[#dadada] p-6 rounded-lg shadow-sm">
        <h3 className="text-center text-[24px] font-semibold mb-6">
          Danh sách công việc
        </h3>

        <form onSubmit={handleSubmit} className="flex gap-5 mb-6">
          <Input value={task} onChange={handleChange} placeholder="Hãy nhập tên công việc"/>
          <Button htmlType="submit" type="primary">
            Thêm
          </Button>
        </form>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <ul className="space-y-2">
          {tasks.map((t) => (
            <li key={t.id} className="flex justify-between items-center p-2">
              <div className="flex items-center gap-3">
                {editId === t.id ? (
                  <Input value={editValue} onChange={(e) => setEditValue(e.target.value)} 
                  onPressEnter={() => handleEditSave(t.id)}
                  />
                ) : (
                  <span>{t.name}</span>
                )}
              </div>
              <div className="flex gap-3 items-center">
                {editId === t.id ? (
                  <Button type="primary" size="small" onClick={() => handleEditSave(t.id)}>
                    Lưu
                  </Button>
                ) : (
                  <PencilLine size={18} className="cursor-pointer" onClick={() => handleEdit(t.id, t.name)}/>
                )}
                <Trash2 size={18} className="cursor-pointer text-red-500" onClick={() => handleDelete(t.id)}/>
              </div>
            </li>
          ))}
        </ul>
         <div className="mt-4">
          Công việc đã hoàn thành:{" "}
          <span>{tasks.filter((t) => t.isCompleted).length}</span> /{" "}
          {tasks.length}
        </div>
      </div>
    </div>
  );
}