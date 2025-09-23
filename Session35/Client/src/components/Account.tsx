import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { account } from '../store/slices/accountSlice';

export default function Account() {
    const result = useSelector((data: any) =>{
        return data.account;
    });
    const dispatch = useDispatch();
    const [user, setUser] = useState<{email: string, password: string}>({email: "", password: ""});

  return (
    <div>
      {!result.isLoggedIn ? 
      <div>
        <h1>Login Form</h1>
        <label htmlFor="">Email: </label> <br />
        <input onChange={(e) => setUser({...user, email: e.target.value})} value={user.email} type="text" name='email' /> <br />
        <label htmlFor="">Password: </label> <br />
        <input onChange={(e) => setUser({...user, password: e.target.value})} value={user.password} type="text" name='password'/> <br />
        <button onClick={()=>dispatch(account.login(user))}>Login</button>
      </div> : 
      <div>
        <h3>Email: {result.email}</h3>
        <h3>Password: {result.password}</h3>
        <button onClick={()=>{dispatch(account.logout()); setUser({email: "", password: ""})}}>Logout</button>
        </div>}
    </div>
  )
}