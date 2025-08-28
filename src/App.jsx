import { useState, useEffect } from 'react'
import MyState from './context/data/myState'
import {  Footer, AppNavbar } from './components/index'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from './conf/authService'
import { login,logout } from './store/authSlice'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login({ userData: user }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <MyState>
      <div className="flex flex-col min-h-screen">

        <AppNavbar />

        <main className="flex-grow ">
          <Outlet />
        </main>

        <Footer />
      </div>
    </MyState>
  ) : null
}

export default App