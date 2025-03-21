import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from './compont/auth/login'
import Register from './compont/auth/Register'
import Admin from './compont/deshboard/Admin'
import User from './compont/deshboard/User'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Login}/>
          <Route path='/register' Component={Register}/>
          <Route path='/admin' Component={Admin}/>
          <Route path='/user' Component={User}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
