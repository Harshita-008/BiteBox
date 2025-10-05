import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ForgotPassword from './pages/ForgotPassword'

export const serverUrl = "http://localhost:8000"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
      </Routes>
    </div>
  )
}

export default App
