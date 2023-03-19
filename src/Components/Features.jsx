import React from 'react'

const Features = () => {
    return (
        <div className='bg-[#3f3f3f] text-white'>
            <div className='container mx-auto px-10'>
                <h1 className='text-[3rem] font-bold underline underline-offset-4 py-8 pt-10 '>Features</h1>
                <div>
                    <div className='grid grid-cols-3 gap-10 pb-[4.5rem]'>
                        <div>
                            <h1 className='text-[1.3rem] font-bold my-4 mb-3'>Feature 1</h1>
                            <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                            <p className='text-md cursor-pointer'>Learn More &nbsp;&nbsp;{'>'}</p>
                        </div>
                        <div>
                            <h1 className='text-[1.3rem] font-bold my-4 mb-3'>Feature 1</h1>
                            <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                            <p className='text-md cursor-pointer'>Learn More  &nbsp;&nbsp;{'>'}</p>
                        </div>
                        <div>
                            <h1 className='text-[1.3rem] font-bold my-4 mb-3'>Find Perfect Team</h1>
                            <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                            <p className='text-md cursor-pointer'>Learn More &nbsp;&nbsp;{'>'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features