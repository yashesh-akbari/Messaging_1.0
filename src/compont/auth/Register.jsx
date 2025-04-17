// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   let [username, setusername] = useState('');
//   let [password, setpassword] = useState('');
//   let [successMessage, setSuccessMessage] = useState('');
//   let navigate = useNavigate();

//   let handleName = (e) => {
//     setusername(e.target.value);
//   }

//   let handlePassword = (e) => {
//     setpassword(e.target.value);
//   }

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("auth", JSON.stringify({ username, password }));
//     setSuccessMessage("You are successfully registered!");

//     // Optional: Delay navigation to show message for a second
//     setTimeout(() => {
//       navigate("/");
//     }, 1500); // 1.5 second delay
//   }

//   let handleLogin = () => {
//     navigate('/');
//   }

//   return (
//     <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded-xl shadow-md">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <h1 className='text-center text-3xl mb-3'>Register</h1>
//           <label className="block text-sm font-medium text-gray-700">Name</label>
//           <input
//             type="text"
//             value={username}
//             onChange={handleName}
//             className="w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={handlePassword}
//             className="w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>
//         <button
//           type='submit'
//           className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//         >
//           Register
//         </button>
//       </form>

//       {successMessage && (
//         <div className="mt-4 text-green-600 text-center font-medium">
//           {successMessage}
//         </div>
//       )}

//       <button className='flex justify-center mt-5 text-blue-500 hover:underline' onClick={handleLogin}>
//         Existing user? Login here.
//       </button>
//     </div>
//   )
// }

// export default Register;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleName = (e) => {
    setusername(e.target.value);
  };

  const handlePassword = (e) => {
    setpassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch existing users or default to empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if username already exists
    const userExists = users.some(user => user.username === username);

    if (userExists) {
      alert("User already available");
      return;
    }

    // Add new user
    const newUser = { username, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('auth', JSON.stringify(newUser)); // Optional: log them in

    setSuccessMessage("You are successfully registered!");

    // Delay navigation to show success message
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded-xl shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h1 className='text-center text-3xl mb-3'>Register</h1>
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

      {successMessage && (
        <div className="mt-4 text-green-600 text-center font-medium">
          {successMessage}
        </div>
      )}

      <button
        className="flex justify-center mt-5 text-blue-500 hover:underline"
        onClick={handleLogin}
      >
        Existing user? Login here.
      </button>
    </div>
  );
}

export default Register;
