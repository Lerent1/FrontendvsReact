import { Button, Input } from 'antd'
import { PencilLine, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import {v7 as uuid} from "uuid"

interface Task {
    id: string;
    name: string;
    isCompleted: boolean;
}

export default function Todolist() {
    const [task, setTask]  = useState<string>('');
    const [error, setError] = useState<string>('');
    const [tasks, setTasks] = useState<Task[]>(() => {

    });
    const taskLocal = JSON.parse(localStorage.getItem("tasks"));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!e.target.value){
            setError('Ten cong viec khong duoc de trong');
            return;
        } else {
            setError("");
            setTask(e.target.value);
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTask: Task = {
            id: uuid(),
            name: task,
            isCompleted: false,
        }
        const taskClone = ([...tasks, newTask]);
        setTasks(taskClone);
        localStorage.setItem("task", JSON.stringify(taskClone));
        setTask("");
    }

  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <div className='w-[1500px] border border-[#dadada] p-6 rounded-lg shadow-sm'>
            <h3 className='text-center text-[24px] font-semibold mb-6'>
                Danh sach cong viec
            </h3>
            <form onSubmit={handleSubmit} className='flex gap-5 mb-6'>
                <Input value={task} onChange={handleChange} placeholder='Hay nhap ten cong viec'></Input>
                <Button htmlType='submit' type='primary'>Them</Button>
            </form>
            <ul className='mb-6'>
                <li className='flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <input type="checkbox" />
                        <span>Ban FF</span>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <PencilLine size={18}/>
                        <Trash2 size={18}/>
                    </div>
                </li>
            </ul>
            <div>Cong viec da hoan thanh: </div>
        </div>
      </div>
    </>
  )
}