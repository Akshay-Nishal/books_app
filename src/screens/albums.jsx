import React from 'react'
import { ImageContext } from '../contexts/images';
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { BrowserRouter , Routes, Route } from 'react-router-dom';


export default function Albums() {
    const {images,setimages}=useContext(ImageContext)
    // console.log(images);
    // console.log(Object.keys(images));
  return (
    <div className='albums'>
    {
    images.map(element => {
        const categoryname = Object.keys(element)[0]  
        const categoryimages = element[categoryname]
        // console.log(categoryimages)  
        // console.log(element);        
        return(
          <Link  key={categoryname} to="/album" state={{ 'Album': element }}>
            <div className='album-card'>
                <img style={{height:'150px',width:'250px'}} src={categoryimages[0]} alt="" />
                <center>
                <h2>{categoryname} Images</h2>
                </center>
            </div>
          </Link>
        )
    })
    }
    </div>
  )
}
