import { useContext, useState} from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
// import axios from 'axios';
import Head from './screens/head';
import Login from './screens/login';
import { UserContext } from './contexts/user';
import Albums from './screens/albums';
import Album from './screens/album';
function App() {
  const [num,setnum]=useState(0)
  const {login,setlogin} = useContext(UserContext)
  // console.log(login==='true');
  // console.log(login);
  return (
    <div className='App'>
    {
      (login==='true')?
      <BrowserRouter>
      <Head/>
      <Routes>
        {<Route path="/" element={<Albums/>}></Route>
        /*<Route path="/products" element={<ProductScreen products={products}/>}></Route>
        <Route path="/cart" element={<CartScreen/>}></Route> */}
        <Route path="/album" element={<Album/>}></Route>
      </Routes>
    </BrowserRouter>
      :
      <Login/>
    }
    </div>
  )
}

export default App;
