import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getAllUser } from '../store/slice/userSlice';

export default function StudentManage() {
    const result = useSelector((data: any) => {
        return data.user.user
    })
    const dispatch: any = useDispatch();
    useEffect(() => {
        dispatch(getAllUser());
    }, []);

    const handleDelete = (id: number) => {
        dispatch(deleteUser(id));
    };

  return (
    <div>
      <h1>Quan ly user</h1>
      <ul>
        {
            result.map((item: any) => (
                <li key={item.id}>{item.name} &nbsp;
                <button>Sua</button> &nbsp;
                <button onClick={() => handleDelete(item.id)}>Xoa</button>
                </li>
            ))
        }
      </ul>
    </div>
  )
}
