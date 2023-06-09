import React from 'react'
import { useContext, useState} from 'react';
import { UserContext } from '../contexts/user';
export default function Head() {
    const {login,setlogin} = useContext(UserContext)
    const onlogout =()=>{
        console.log("Logout");
        localStorage.setItem('login','false')
        setlogin(false)
      }
  return (
    <div className="head">
        <img src={require('../gal.png')} alt="" />
        <h2>Gallery App</h2>
        <button onClick={onlogout} id='logout'>Logout</button>
      </div>
  )
}
