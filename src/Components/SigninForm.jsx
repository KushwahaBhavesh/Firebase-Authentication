import React, { useRef } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import toast from 'react-hot-toast';

const SigninForm = ({ setOpen }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      console.log(userCredential);
      userCredential.user?.uid ? toast.success("Login Successful") : toast.error("Invalid Credentials") 
    }).catch((err)=>{
      console.log(err);
    })

  }

  const closeModel = () => {
    setOpen(false)
  }
  return <>
    <div className='model-body'>
      <div className='form-type'>
        <h2>Signin</h2>
        <i class="bi bi-x-lg" onClick={closeModel}></i>
      </div>
      <form method='post'>
        <div className='form-input'>
          <input type='email' placeholder="Email" ref={emailRef}/>
        </div>
        <div className='form-input'>
          <input type='password' placeholder="password" ref={passwordRef} />
        </div>
        <button className='submit-btn' type='submit' onClick={onSubmit}>singin</button>
      </form>
    </div>
  </>
}

export default SigninForm
