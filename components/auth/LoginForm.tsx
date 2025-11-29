'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { axiosInstance } from '@/libs/axios/axios'
import { useRouter } from 'next/navigation'

const LoginForm = () => {

    const route = useRouter()

    const login = z.object({
        email: z.email(),
        password: z.string().min(3)
    })

    type Login = z.infer<typeof login>

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(login)
    })

    const onSubmit = async (data: Login) => {
        const res = await axiosInstance.post('api/auth/login', {
            email: data.email,
            password: data.password
        })
        if (res.status === 200) {
            console.log("Berhasil Login")
        } else if (res.status === 400) {
            console.log('Gagal Login')
        }
    }

    return (

        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-6">


                <div className="relative">
                    <input
                        type="email"
                        className="peer w-full h-12 border-b-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-cyan-500"
                        placeholder="Email"
                        {...register("email")}
                    />
                    <label
                        htmlFor="email"
                        className="absolute left-0 top-3 text-gray-500 dark:text-gray-300 transition-all
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                peer-focus:-top-3 peer-focus:text-sm peer-focus:text-cyan-500"
                    >
                        Email Address
                    </label>
                    <p>{errors.email?.message}</p>
                </div>


                <div className="relative">
                    <input
                        {...register("password")}
                        type="password"
                        className="peer w-full h-12 border-b-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-cyan-500"
                        placeholder="Password"
                    />
                    <label
                        htmlFor="password"
                        className="absolute left-0 top-3 text-gray-500 dark:text-gray-300 transition-all
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                peer-focus:-top-3 peer-focus:text-sm peer-focus:text-cyan-500"
                    >
                        Password
                    </label>
                    <p>{errors.password?.message}</p>
                </div>


                <button className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 transition text-black font-semibold rounded-md">
                    Submit
                </button>
            </div>
        </form>
    )
}

export default LoginForm