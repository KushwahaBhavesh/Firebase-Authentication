import React, { useRef } from 'react'
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import toast from 'react-hot-toast';

const SignupForm = ({ setOpen }) => {

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const onSubmit=async(e)=>{
    e.preventDefault();
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    console.log(name,phone,email,password,confirmPassword);

    await (createUserWithEmailAndPassword(auth,email,password)).
    then((userCredential)=>{
      console.log(userCredential);
      userCredential?.user?.uid ? toast.success('Registration successfully'):null;
    }).catch((error)=>{
      console.log(error);
      toast.error(error.code)
    });
  }
   

  const closeModel = () => {
    setOpen(false)
  }
  return <>
    <div className='model-body'>
      <div className='form-type'>
        <h2>Signup</h2>
        <i class="bi bi-x-lg" onClick={closeModel}></i>
      </div>
      <form>
        <div className='form-input'>
          <input type='text' placeholder="Name" ref={nameRef} />
        </div>
        <div className='form-input'>
          <input type='number' placeholder="Mobile number" ref={phoneRef} />
        </div>
        <div className='form-input'>
          <input type='email' placeholder="Email" ref={emailRef}/>
        </div>
        <div className='form-input'>
          <input type='password' placeholder="password" ref={passwordRef} />
        </div>
        <div className='form-input'>
          <input type='password' placeholder="confirm-password" ref={confirmPasswordRef} />
        </div>
        <button className='submit-btn' type='submit' onClick={onSubmit}>singup</button>
      </form>

    </div>
  </>
}

export default SignupForm
