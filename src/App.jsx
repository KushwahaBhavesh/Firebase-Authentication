import React, { useState } from 'react'
import './App.css'
import Modal from './Components/Modal';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [open, setOpen] = useState(false);
  const [model,setModel] = useState();
  
  
  const handleOpen = (str) => {
    setModel(str);
    setOpen(true)
  }

  
  return <>
    <section className='main'>
      <div className='button-container'>
        <button className='btn-1' onClick={()=>handleOpen('signin')}>SignIn</button>
        <button className='btn-2' onClick={() => handleOpen("signup")}>Signup</button>
      </div>

      {open && <Modal setOpen={setOpen} model={model} />}
      <Toaster />
    </section>
  </>
}

export default App
