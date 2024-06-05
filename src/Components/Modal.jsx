import React from 'react'
import SignupForm from './SignupForm'
import SigninForm from './SigninForm'

const Modal = ({ setOpen, model }) => {
  return <>
    <div className='model-container'>
      <div className='model'>
        {model === 'signup' && <SignupForm setOpen={setOpen} />}
        {model === 'signin' && <SigninForm setOpen={setOpen} />}
        {/* <SignupForm /> */}
      </div>
    </div>
  </>
}

export default Modal
