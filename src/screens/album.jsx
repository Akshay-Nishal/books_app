import React from 'react'
import { useLocation } from "react-router-dom"

export default function Album() {
    const showimg =(e,id)=>{
        // console.log(id);
        let show = document.getElementById(id)
        show.style.display='block'
      }
    const hideimg =(e,id)=>{
        // console.log(id);
        let show = document.getElementById(id)
        show.style.display='none'
      }
    let c = 0
const location = useLocation()
const { Album } = location.state
const propertyName = Object.keys(Album)[0];
const { [propertyName]: picArray } = Album;
// console.log(picArray);
  return (
    <div className='inside-album'>
        {
            picArray.map((pic)=>{
                c+=1
                let id = 'pic'+c
                return(
                    < >
                    <div onClick={(event) =>showimg(event,id)} className="img_card">
                        <img src={pic} alt="" />
                        <center>
                            <h3>{propertyName+' '+c}</h3>
                        </center>
                    </div>

                    <div  id={id} className='bigImg'>
                        <img src={pic} alt="" />
                        <center>
                            <p>This is the information of the image</p>
                            <button onClick={(event) =>hideimg(event,id)}>Close</button>
                        </center>
                    </div>
                    </>
                )
            })
        }
    </div>
  )
}
