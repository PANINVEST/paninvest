import React from 'react'

const Startups = () => {
    return (
        <div className='grid place-items-center mt-10'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl m-4 mb-2 font-bold'>Startups</h1>
                <p className='text-sm m-4 mb-10'>List of all the Startups listed on our website</p>
            </div>
            <div className='grid grid-cols-4 gap-6 mt-5 '>
                <div className='w-60 h-60 bg-slate-500 rounded-sm'></div>
                <div className='w-60 h-60 bg-slate-500 rounded-sm'></div>
                <div className='w-60 h-60 bg-slate-500 rounded-sm'></div>
                <div className='w-60 h-60 bg-slate-500 rounded-sm'></div>
                <div className='w-60 h-60 bg-slate-500 rounded-sm'></div>
                <div className='w-60 h-60 bg-slate-500 rounded-sm'></div>
                <div className='w-60 h-60 bg-slate-500 rounded-sm'></div>
                <div className='w-60 h-60 bg-slate-500 rounded-sm'></div>
            </div>
            <p className='text-xs cursor-pointer underline m-10 underline-offset-4'>See all--{'>'}</p>
        </div>
    )
}

export default Startups