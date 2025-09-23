import { useDispatch, useSelector } from 'react-redux'
import { random } from '../store/slices/randomSlice';

export default function RandomList() {
    const result = useSelector((data: any) =>{
        return data.random;
    });
    const dispatch=useDispatch();
  return (
    <div>
      <h1>List Number: [{result.join(", ")}]</h1>
      <button onClick={()=>dispatch(random.random())}>Random number</button>
    </div>
  )
}