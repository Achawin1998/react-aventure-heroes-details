import React from 'react'
import { useTitle } from '../hooks/useTitle'

export const HomePage = () => {

    useTitle('Home 🏘️')

    return (
        <div className='flex flex-col items-center min-h-screen bg-gray-800 p-4'>
            <h1 className='text-white text-3xl font-bold font-mono text-center mt-4'>
                Marvel App
            </h1>
            <img
                className='md:h-6/12 lg:h-2/4 object-cover rounded my-7 shadow-sm shadow-blue-400'
                src="https://cdn.pixabay.com/photo/2024/03/15/19/53/super-hero-8635698_1280.jpg" alt="marvel home pic"
            />
        </div>
    )
}