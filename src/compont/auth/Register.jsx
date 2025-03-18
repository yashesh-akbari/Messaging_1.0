// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   let [username,setusername]=useState('');
//   let [password,setpassword]=useState('');
//   let navigate=useNavigate();

//   let handleName=(e)=>{
//     setusername(e.target.value);
//     console.log(username);
//   }
//   let handlePassword=(e)=>{
//     setpassword(e.target.value);
//     console.log(password);
//   }
//   let handleSubmit=(e)=>{
//     e.preventDefault(); 
//     navigate("/")
//     localStorage.setItem("auth",JSON.stringify({username,password}))
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//       Name:<input type="text" value={username} onChange={handleName} required/>
//       <br />
//       Password:<input type="password" value={password} onChange={handlePassword} required/>
//       <br />
//       <button type='submit'>
//         Register
//       </button>
//       </form>
//     </div>
//   )
// }

// export default Register

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
  let [username, setusername] = useState('');
  let [password, setpassword] = useState('');
  let navigate = useNavigate();

  let handleName = (e) => {
    setusername(e.target.value);
  }
  let handlePassword = (e) => {
    setpassword(e.target.value);
  }
  let handleSubmit = (e) => {
    e.preventDefault();
    navigate("/")
    localStorage.setItem("auth", JSON.stringify({ username, password }))
  }

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded-xl shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={username}
            onChange={handleName}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type='submit'
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register;