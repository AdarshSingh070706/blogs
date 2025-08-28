import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { login as userLogin } from '../store/authSlice'
import { auth } from '../conf/conf'
import { Button, Input, Logo } from './index'
import { FaGoogle, FaFacebook, FaGithub, FaLinkedin, FaUser, FaLock } from "react-icons/fa";
import { serializeUser } from '../conf/serialUser'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState("")

  const login = async (data) => {
  setError("");
  try {
    const session = await signInWithEmailAndPassword(auth, data.email, data.password);
    if (session.user) {
      const safeUser = serializeUser(session.user);
      dispatch(userLogin({ userData: safeUser })); // ✅ ab sahi action dispatch hoga
      navigate("/dashboard"); // optional redirect
    }
  } catch (error) {
    console.error(error);
    setError(error.message);
  }
};
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-l from-gray-400 via-gray-500 to-gray-900">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="font-bold text-3xl mb-6 text-center">Login</h1>

        <form className="space-y-5" onSubmit={handleSubmit(login)}>
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be valid",
                },
              })}
              className="bg-gray-200 rounded-lg p-3 w-full text-base focus:outline-none"
            />
            <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="bg-gray-200 rounded-lg p-3 w-full text-base focus:outline-none"
            />
            <FaLock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
          </div>

          <div className="text-sm text-right">
            <Link to="/forgot-password" className="text-gray-400 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-800 w-full py-3 rounded-lg text-white transition cursor-pointer"
          >
            Login
          </button>

          {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

          <p className="text-sm text-center text-gray-400">or login with social platforms</p>

          <div className="flex justify-center gap-4 text-2xl">
            <FaGoogle className="p-2 border rounded-md hover:bg-gray-100 cursor-pointer" />
            <FaFacebook className="p-2 border rounded-md hover:bg-gray-100 cursor-pointer" />
            <FaGithub className="p-2 border rounded-md hover:bg-gray-100 cursor-pointer" />
            <FaLinkedin className="p-2 border rounded-md hover:bg-gray-100 cursor-pointer" />
          </div>

          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-gray-700 font-semibold hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
