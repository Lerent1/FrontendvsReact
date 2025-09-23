import { DashboardOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { menu } from '../store/slices/menuSlice';

export default function Menu() {
     const result = useSelector((data: any) =>{
        return data.menu;
    });
    const dispatch=useDispatch();

  return (
    <div>
      <div><DashboardOutlined /> {result ? "Bang dieu khien" : ""}</div>
      <div><DashboardOutlined /> {result ? "Tai khoan" : ""}</div>
      <div><DashboardOutlined /> {result ? "Tai san" : ""}</div>
      <div><DashboardOutlined /> {result ? "Thong ke" : ""}</div>
      <div><DashboardOutlined /> {result ? "Tai lieu" : ""}</div>
      <div onClick={()=>dispatch(menu.switchMode())}>
        {result ? <div><LeftOutlined /> Thu gon </div> : <div><RightOutlined /></div>}
      </div>
    </div>
  )
}