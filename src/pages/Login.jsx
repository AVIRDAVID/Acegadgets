import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners';

const Login = () => {
  const redirect = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loader, setLoader] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === 'ajuziedavid14@gmail.com' && password ==='Avpass03!'){
      setError('');
      setLoader(<PacmanLoader />);
      setTimeout(() => {
         redirect('/')
      }, 5000);
     
    } else {
      setError('Invalid Credentials');
    }
  }



  return (
    <div>
      <form
        /* onSubmit ={handleSubmit} */
        className = 'w-[400px] p-3 shadow-2xl mx-auto my-9 rounded-2xl'
      >
        <h1 className="text-3xl">Login</h1>
        <label htmlFor="email">Email</label>
        <input type="email" 
        className="w-full p-2 h-[40px] border-2 border-gray-300 rounded-lg block my-2" 
        placeholder='Email Address'
        id='email'
        value={email}
        onChange={(e) => {setEmail(e.target.value)}}
        />

        <label htmlFor="password">Password</label>
        <input type="password" 
        className="w-full h-[40px] p-2 border-2 border-gray-300 rounded-lg block my-2" 
        placeholder='Password'
        id='password'
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}
        />
        <p className="text-white bg-red-500 text-center rounded-lg ">{error}{loader}</p>
        <button
        onClick={handleSubmit} 
        className=" active:bg-red-700 active:text-black w-full h-[40px] bg-purple-500 rounded-lg text-white font-bold block my-2">
          Register
        </button>


      </form>
    </div>
  )
}

export default Login