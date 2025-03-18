// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


// function Login() {
//   let [LoginName,setLoginName]=useState(" ");
//   let [LoginPassword,setLoginPassword]=useState("");
//    let storeAuthdata=JSON.parse(localStorage.getItem("auth"));
  
//   let userName=(e)=>{
//     setLoginName(e.target.value);
//     // console.log(LoginName);
//   }
  
//   let userpassword=(e)=>{
//     setLoginPassword(e.target.value);
//     // console.log(a);
//   }


//   let navigate=useNavigate();
//   let auth=(e)=>{
//     e.preventDefault();
//     if(LoginName==='admin' && LoginPassword==='123')
//       {
//        navigate("/admin") 
//       }
//       else if(storeAuthdata.username==="yashesh" || storeAuthdata.password==="123"){
//         navigate("/user")
//       }
//       else{
//         alert("invaild name or password");
//       }
//     }  
  

//   return (
//     <div>
//       <h1>Login page</h1>
//       <form type="post"
//        onSubmit={auth}
//        >
//         userName: <input name='name' type="text" className='border' required  onChange={userName} value={LoginName}/>
//         Password: <input name="password" type="password" className='border' required onChange={userpassword} value={LoginPassword}/>
//         <button type='submit'>Login in</button>
//       </form>
//     </div>
//   )
// }


// export default Login

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  let [LoginName, setLoginName] = useState(" ");
  let [LoginPassword, setLoginPassword] = useState("");
  let storeAuthdata = JSON.parse(localStorage.getItem("auth"));

  let userName = (e) => {
    setLoginName(e.target.value);
  }

  let userpassword = (e) => {
    setLoginPassword(e.target.value);
  }

  let navigate = useNavigate();
  let auth = (e) => {
    e.preventDefault();
    if (LoginName === 'admin' && LoginPassword === '123') {
      navigate("/admin")
    }
    else if (storeAuthdata.username === "yashesh" || storeAuthdata.password === "123") {
      navigate("/user")
    }
    else {
      alert("Invalid name or password");
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-center">Login Page</h1>
      <form onSubmit={auth} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">User Name</label>
          <input
            name='name'
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
        <button type='submit' className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Log In
        </button>
      </form>
    </div>
  )
}

export default Login;
