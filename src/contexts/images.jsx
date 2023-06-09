import { createContext,useState } from "react";

// the actual value that you need to access.
export const ImageContext= createContext({
    images:null,
    setimages:() => null
})
/* current context value, as given by the nearest context provider for the given context. */
export const ImageProvider = ({children})=>{
    const [images,setimages] = useState([{
        'Nature':[
            'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000',
            'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
            'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg',
            'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg'
    ]},
        {'City':[
            'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
            'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg',
            'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eSUyMHN0cmVldHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
    ]},
        {'Space':[
            'https://cdn.hswstatic.com/gif/outer-space.jpg',
            'https://cdn.wccftech.com/wp-content/uploads/2016/09/spacee-scaled.jpg',
            'https://nationaltoday.com/wp-content/uploads/2021/05/space-1-1200x834.jpg',
            'https://w0.peakpx.com/wallpaper/168/539/HD-wallpaper-space-open-space-planets-art-colorful.jpg'
        ]
    }])
    const value = {images,setimages}


    return <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
}
