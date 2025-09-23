import { HeartOutlined } from '@ant-design/icons';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { page } from '../store/slices/pageSlice';

export default function Page() {
    const result = useSelector((data: any) =>{
        return data.page;
    });
    const dispatch=useDispatch();
  return (
    <div>
        <h1>List Favourite User</h1>
      <div>
        {result.map((item: any) =>{
        return <div key={item.id}>
            <div>UserName: {item.name}</div>
            <div style={{display: "flex", gap: "5px"}}>Favourites: <div onClick={()=>dispatch(page.changeFavourite(item.id))} style={item.isFavourite ? {color: "deeppink"} : {color: "black"}}><HeartOutlined /></div></div>
        </div>
      })}
      </div>
    </div>
  )
}