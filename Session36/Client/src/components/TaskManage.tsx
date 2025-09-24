import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { addTask, deleteTask, getTasks, toggleTask, updateTask } from '../store/slice/taskSlice';
import type { Priority, Task } from '../utils/listType';

const TaskManage: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.task);
  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState<Priority>('Cao');
  const [taskUpdate, setTaskUpdate] = useState<Task | null>(null);
  const dispatch = useDispatch<any>();

  const [filters, setFilters] = useState({
    status: 'Tất cả',
    priority: 'Tất cả',
    searchTerm: '',
  });

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task: Task) => {
      const statusMatch =
        filters.status === 'Tất cả' ||
        (filters.status === 'Hoàn thành' && task.completed) ||
        (filters.status === 'Chưa hoàn thành' && !task.completed);

      const priorityMatch =
        filters.priority === 'Tất cả' || task.priority === filters.priority;

      const searchTerm = filters.searchTerm.trim().toLowerCase();
      const searchTermMatch =
        searchTerm === '' || task.taskName.toLowerCase().includes(searchTerm);

      return statusMatch && priorityMatch && searchTermMatch;
    });
  }, [tasks, filters]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    if (taskUpdate == null) {
      dispatch(
        addTask({
          id: Date.now(),
          taskName: newTaskText,
          completed: false,
          priority: newTaskPriority,
        })
      );
    } else {
      dispatch(
        updateTask({
          ...taskUpdate,
          taskName: newTaskText,
          priority: newTaskPriority,
        })
      );
      setTaskUpdate(null);
    }

    setNewTaskText('');
    setNewTaskPriority('Cao');
  };

  return (
    <div className="task-manager-container">
      <h1>Task Manager</h1>

      <form className="card add-task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Công việc mới"
          className="task-input"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <select
          className="priority-select"
          value={newTaskPriority}
          onChange={(e) => setNewTaskPriority(e.target.value as Priority)}
        >
          <option value="Cao">Cao</option>
          <option value="Trung bình">Trung bình</option>
          <option value="Thấp">Thấp</option>
        </select>
        <button type="submit" className="add-button">
          {taskUpdate ? 'Cập Nhật' : 'Thêm'}
        </button>
        {taskUpdate && (
          <button
            type="button"
            onClick={() => {
              setTaskUpdate(null);
              setNewTaskText('');
              setNewTaskPriority('Cao');
            }}
            style={{ backgroundColor: 'red' }}
          >
            Hủy Cập Nhật
          </button>
        )}
      </form>

      <div className="card filter-controls">
        <select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option>Tất cả</option>
          <option>Hoàn thành</option>
          <option>Chưa hoàn thành</option>
        </select>
        <select
          value={filters.priority}
          onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
        >
          <option>Tất cả</option>
          <option>Cao</option>
          <option>Trung bình</option>
          <option>Thấp</option>
        </select>
        <input
          type="text"
          placeholder="Tìm kiếm"
          value={filters.searchTerm}
          onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
        />
      </div>

      <div className="task-list">
        {filteredTasks.map((task: Task) => (
          <div key={task.id} className={`card task-item ${task.completed ? 'completed' : ''}`}>
            <input type="checkbox" checked={task.completed} onChange={() => dispatch(toggleTask(task.id))}/>
            <p className="task-text">{task.taskName}</p>
            <span className={`badge badge-${(task.priority ?? "Thấp").toLowerCase().replace(' ', '-')}`}>
                {(task.priority ?? "Thấp").toUpperCase()}
            </span>
            <button className="icon-button" onClick={() => dispatch(deleteTask(task.id))}>Xoa</button>
            <button
              className="icon-button"
              onClick={() => { setTaskUpdate(task);
                setNewTaskText(task.taskName);
                setNewTaskPriority(task.priority);
              }}>
              Sua
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManage;