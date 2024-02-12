"use client"

import { usePage } from "./usePage"

export default function RegisterPage() {

    const { errors, handleSubmit, onSubmit, register } = usePage()

    return (
        <div className="h-[calc(100vh-7rem)] flex justify-center items-center dashboard">
            <div className="card-form">
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* label register */}
                    <h1 className="text-blue-800 font-bold text-4xl mb-4">
                        Register
                    </h1>


                    {/* username */}
                    <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
                        Username:
                    </label>
                    <input type="text" {...register("username", {
                        required: {
                            value: true,
                            message: "Username is required",
                        },
                    })}
                        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                        placeholder="yourUser123"
                    />
                    {
                        errors.username && (
                            <span className="text-red-500 text-xs">
                                {errors.username.message}
                            </span>
                        )
                    }


                    {/* email */}
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
                        placeholder="yourEmail@gmail.com"
                    />
                    {
                        errors.username && (
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
                        errors.username && (
                            <span className="text-red-500 text-xs">
                                {errors.password.message}
                            </span>
                        )
                    }


                    {/* confirmPassword */}
                    <label htmlFor="confirmPassword" className="text-slate-500 mb-2 block text-sm">
                        Confirm Password:
                    </label>
                    <input type="password" {...register("confirmPassword", {
                        required: {
                            value: true,
                            message: "Confirm password is required",
                        },
                    })}
                        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
                        placeholder="*********"
                    />
                    {
                        errors.username && (
                            <span className="text-red-500 text-xs">
                                {errors.confirmPassword.message}
                            </span>
                        )
                    }


                    {/* botton */}
                    <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
                        Register
                    </button>

                </form>
            </div>
        </div>
    )
}