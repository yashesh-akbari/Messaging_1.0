// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// function Login() {
//   let [LoginName, setLoginName] = useState(" ");
//   let [LoginPassword, setLoginPassword] = useState("");
//   let storeAuthdata = JSON.parse(localStorage.getItem("auth"));

//   let userName = (e) => {
//     setLoginName(e.target.value);
//   }

//   let userpassword = (e) => {
//     setLoginPassword(e.target.value);
//   }

//   let navigate = useNavigate();
//   let ResgiterNavigate=()=>{
//     navigate("/register")
//   }

  
//   let auth = (e) => {
//     e.preventDefault();
//     if (LoginName === 'admin@ex.com' && LoginPassword === '123') {
//       navigate("/admin")
//     }
//     else if (storeAuthdata.username === "yashesh" || storeAuthdata.password === "123") {
//       navigate("/user")
//     }
//     else {
//       alert("Invalid name or password");
//     }
//   }

//   return (
//     <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded-xl shadow-md">
//       <h1 className="text-2xl font-semibold mb-6 text-center">Login Page</h1>
//       <form onSubmit={auth} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">User Name</label>
//           <input
//             name='name'
//             type="text"
//             className="w-full p-2 border border-gray-300 rounded-md"
//             required
//             onChange={userName}
//             value={LoginName}
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             name="password"
//             type="password"
//             className="w-full p-2 border border-gray-300 rounded-md"
//             required
//             onChange={userpassword}
//             value={LoginPassword}
//           />
//         </div>
//         <button type='submit' className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
//           Log In
//         </button>
//       </form>

//       <button className='flex justify-center mt-5' onClick={ResgiterNavigate}>New User</button>
//     </div>
//   )
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [LoginName, setLoginName] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const storeAuthdata = JSON.parse(localStorage.getItem("auth"));

  const userName = (e) => {
    setLoginName(e.target.value);
  };

  const userpassword = (e) => {
    setLoginPassword(e.target.value);
  };

  const ResgiterNavigate = () => {
    navigate("/register");
  };

  const auth = (e) => {
    e.preventDefault();

    const trimmedName = LoginName.trim();

    if (trimmedName === 'admin' && LoginPassword === '123') {
      navigate("/admin");
    } 
    else if (
      storeAuthdata &&
      (storeAuthdata.username === trimmedName || storeAuthdata.password === LoginPassword)
    ) {
      navigate("/user");
    } 
    else {
      alert("Invalid name or password");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-center">Login Page</h1>
      <form onSubmit={auth} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">User Name</label>
          <input
            name="name"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
            onChange={userName}
            value={LoginName}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            name="password"
            type="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
            onChange={userpassword}
            value={LoginPassword}
          />
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Log In
        </button>
      </form>

      <button
        className="flex justify-center mt-5 text-blue-500 hover:underline"
        onClick={ResgiterNavigate}
      >
        New User? Register here
      </button>
    </div>
  );
}

export default Login;
