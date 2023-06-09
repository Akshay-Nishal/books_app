import React from 'react'
import { useContext, useState} from 'react';
import '../App.css';
import { UserContext } from '../contexts/user';

export default function Login() {
    const {login,setlogin} = useContext(UserContext)
    const onlogin =()=>{
      var usr =document.getElementById('USR').value
      var pass =document.getElementById('PASS').value
      if (usr===pass){
        localStorage.setItem('login','true')
        setlogin(true)
      }
      else{
        window.alert("Invalid Credentials");
      }
    }
  return (
    <div className="login">
    <div className="login-form">
        <div className='login-head'>
          <center><h1>Please login</h1>
          </center>
        </div>
      <form >
        <label htmlFor="USR">Username</label>
        <input id='USR' type="text" />
        <label htmlFor="PASS">Password</label>
        <input id='PASS' type="password" />
        <button onClick={onlogin}>LOGIN</button>
      </form>
    </div>
    <p style={{marginTop:'25px',textAlign:'center'}}>Hint: use same username and password<br/> For example username: 123 password: 123</p>
    </div>
  )
}
