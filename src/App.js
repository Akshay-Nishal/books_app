import { useState} from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [num,setnum]=useState(0)
  const [saved,setdone]=useState(false)
  const [SelectedContacts,setcontact]=useState([])
  const [data,setdata]=useState([{
    "name": "John",
    "phone": "+91 1234567890"
    },
    {
    "name": "Sarah",
    "phone": "+91 9876543210"
    },
    {
    "name": "Michael",
    "phone": "+91 5555555555"
    },
    {
    "name": "Emily",
    "phone": "+91 7777777777"
    },
    {
    "name": "David",
    "phone": "+91 8888888888"
    },
    {
    "name": "Jessica",
    "phone": "+91 2222222222"
    },
    {
    "name": "Robert",
    "phone": "+91 3333333333"
    },
    {
    "name": "Jennifer",
    "phone": "+91 4444444444"
    },
    {
    "name": "Matthew",
    "phone": "+91 6666666666"
    },
    {
    "name": "Olivia",
    "phone": "+91 9999999999"
    },
    {
    "name": "Nathan",
    "phone": "+91 1234567894"
    }
  ])
  // var data = 
  // console.log(data)
  function click(e,c){
    // console.log('done',name)
    let tem = document.getElementById(c.name)
    if(tem.checked){
      // console.log("Checked",c)
      let count = num+1
      setnum(count)
      let nc = SelectedContacts
      nc.push(c)
      setcontact(nc)
      console.log(SelectedContacts)
    }
    else{
      // console.log("Unchecked")
      let count = num-1
      setnum(count)
      let nc = SelectedContacts
      nc.pop(c)
      console.log('nc',nc);
      setcontact(nc)
      console.log('sc',SelectedContacts)
    }
  }
  const handleSave = () => {
    (num>=1)?
    axios
    .post('https://api.thenotary.app/updateNumbers', { SelectedContacts })
    .then((response) => {
      console.log(response.data); 
      setdone(true)
    })
    .catch((error) => {
      console.error(error);
    })
    : alert("plese select atleast 1 contact")
    }
    const done = () =>{
      console.log("done");
      let c = data
      setdone(false)
      window.location.reload();
  }
  return (
    <div className="App">
      {saved ? (
        <div className='done'>
        <p>Contacts saved successfully</p>
        <button onClick={done} className='ok'>OK</button>
      </div> 
      ) : (<></>
      )}
      
      <div className='MobileScreen'>
        {/* <img style={{height:'700px',width:'700px'}} src={require('../src/back2.png')} alt="" /> */}
        <div className='head'>
          <h2>Select Contacts</h2>
          {/* {console.log(num)} */}
          <p id='numberselected'>{num} Contacts Selected</p>
          <input id='search' type="text" />
        </div>
        <div className='contacts'>
          {/* <div className='contact'>
            <div className="left">
              <img style={{height:'25px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1024px-Google_Contacts_icon.svg.png" alt="" />
              <div className="info">
                <p className='name'>Name</p>
                <p className='number'>Number</p>
              </div>
            </div>
            <div className="right">
              <input type="checkbox" />
            </div>
          </div> */}
          {data.map((c)=>{
            return(
              <div key={c.name} className='contact'>
            <div className="left">
              <img style={{height:'25px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1024px-Google_Contacts_icon.svg.png" alt="" />
              <div className="info">
                <p className='name'>{c.name}</p>
                <p className='number'>{c.phone}</p>
              </div>
            </div>
            <div className="right">
              <input id={c.name} onClick={(event)=>click(event,c)} type="checkbox" />
            </div>  
          </div>
            )
          })}
        </div>
        <div className="save">
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default App;
