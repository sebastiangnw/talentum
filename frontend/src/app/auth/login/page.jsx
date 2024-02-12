"use client"

import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const router = useRouter()

  const [error, setError] = useState(null)

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    })


    if (res.error) {
      setError(res.error)
    } else {
      router.push("/dashboard")
      router.refresh()
    }

  })


  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center dashboard">
      <div className="card-form">
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* error message */}
          {error && (
            <p className='bg-red-500 text-lg text-white p-3 rounded mb-2'>{error}</p>
          )}


          {/* label login */}
          <h1 className="text-blue-800 font-bold text-4xl mb-4">
            Login
          </h1>


          {/* username */}
          <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
            Email:
          </label>
          <input type="email" {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder="email@gmail.com"
          />
          {
            errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )
          }


          {/* password */}
          <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
            Password:
          </label>
          <input type="password" {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
            className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
            placeholder="*********"
          />
          {
            errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )
          }


          {/* botton */}
          <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
            login
          </button>

        </form>
      </div>
    </div>
  )
}
