import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import NoPage from "./pages/nopage/NoPage";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import AdminLogin from "./pages/admin/adminLogin/AdminLogin";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import MyState from "./context/data/myState";
import CreateBlog from "./pages/admin/createBlog/createBlog";
import { Provider } from 'react-redux'
import store from './store/store.js'
import { AuthLayout, Login, SearchDialog, Signup } from './components/index.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        )
      },
      {
        path: "/blog",
        element: (
          <AuthLayout>
            <Blog />
          </AuthLayout>
        )
      },
            {
        path: "/search-box",
        element: (
          <AuthLayout>
            <SearchDialog />
          </AuthLayout>
        )
      },
      {
        path: "/allblog",
        element: (
          <AuthLayout>
            <AllBlogs />
          </AuthLayout>
        )
      },
      {
        path: "/*",
        element: (
          <AuthLayout>
            <NoPage />
          </AuthLayout>
        )
      },
      {
        path: "/bloginfo",
        element: (
          <AuthLayout>
            <BlogInfo />
          </AuthLayout>
        )
      },
      // {
      //   path: "/adminlogin",
      //   element: (
      //     <AuthLayout authentication={false}>
      //       <AdminLogin />
      //     </AuthLayout>
      //   )
      // },
      {
        path: "/dashboard",
        element: (
          <AuthLayout>
            <Dashboard />
          </AuthLayout>
        )
      },
      {
        path: "/createblog",
        element: (
          <AuthLayout>
            <CreateBlog />
          </AuthLayout>
        )
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
