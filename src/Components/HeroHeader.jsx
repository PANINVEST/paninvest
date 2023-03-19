import React from 'react'

const HeroHeader = () => {
    return (
        <div className='bg-green-100'>
        <div className='container mx-auto '>
            <div className='grid grid-cols-2 place-items-center py-[6rem]'>
                <div>
                    <h1 className='text-[3rem] font-bold'>Short Heading Here</h1>
                </div>
                <div>
                    <p className='w-[600px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium culpa architecto nulla blanditiis sunt rerum enim, quis cumque. Earum molestiae porro iste unde incidunt magni et, eveniet tempore enim molestias?</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HeroHeader