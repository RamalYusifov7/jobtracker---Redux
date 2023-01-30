import React, { useEffect, useState } from 'react'
import Logo from '../components/Logo/Logo'
import FormItem from "../components/FormItem/FormItem"
import { ResgisterWrapper } from '../components/styles/Register/Register.styled'
import { Button } from '../components/styles/Common/Buttons/Buttons.styled'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../features/User/userSlice'
import { toast } from 'react-toastify'

const initialState = {
  email: "",
  password: ""
}
function Login() {
  const {user,loading}=useSelector(store=>store.user)
  const [values, setValues] = useState(initialState)
  const { email, password } = values
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      toast.warning("Fill out all the fields")
      return;
    }
    dispatch(loginUser({ email, password }))
  }

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  },[user,navigate])
  return (
    <ResgisterWrapper>
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <Logo />
          <h3>Login</h3>
        </div>
        <FormItem
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
        />
        <FormItem
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
        />
        <Button disabled={loading} className='submit' type='submit'>{loading ? "Loading...":"Submit"}</Button>
        <p className='form-footer'>Haven't registred yet ? <Link to="/register">Register</Link></p>
      </form>
    </ResgisterWrapper>
  )
}

export default Login