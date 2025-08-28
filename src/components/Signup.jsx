import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { login as userLogin } from '../store/authSlice'
import { auth } from '../conf/conf'
import { getCurrentUser } from '../conf/authService'
import { Button, Input, Logo } from './index'
import { FaGoogle, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

function Signup() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const create = async (data) => {
    setError("")
    try {
      const userData = await createUserWithEmailAndPassword(auth, data.email, data.password)
      const user = userData.user
      if (userData) {
        await sendEmailVerification(user)

        const currentUser = await getCurrentUser()
        if (userData) dispatch(userLogin(currentUser));
        navigate("/")
      }
    } catch (error) {
      setError(error.message)
    }
  }
    return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-r from-gray-400 via-gray-500 to-gray-900">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="font-bold text-3xl mb-6 text-center">Register</h1>

        <form className="space-y-5" onSubmit={handleSubmit(create)}>
          {/* Username */}
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
                {...register("name", {
                required: true,
              })}
              className="bg-gray-200 rounded-lg p-3 w-full text-base focus:outline-none"
            />
            <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
               {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
              })}
              className="bg-gray-200 rounded-lg p-3 w-full text-base focus:outline-none"
            />
            <FaEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
              })}
              className="bg-gray-200 rounded-lg p-3 w-full text-base focus:outline-none"
            />
            <FaLock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
          </div>

          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-800 w-full py-3 rounded-lg text-white transition cursor-pointer"
          >
            Register
          </button>

          <p className="text-sm text-center text-gray-400">
            or register with social platforms
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 text-2xl">
            <FaGoogle className="p-2 border rounded-md hover:bg-gray-100 cursor-pointer" />
            <FaFacebook className="p-2 border rounded-md hover:bg-gray-100 cursor-pointer" />
            <FaGithub className="p-2 border rounded-md hover:bg-gray-100 cursor-pointer" />
            <FaLinkedin className="p-2 border rounded-md hover:bg-gray-100 cursor-pointer" />
          </div>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-gray-700 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};



export default Signup