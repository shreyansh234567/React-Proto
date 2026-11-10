import React from 'react'

function Card({ title, body }) {
    return (
        <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-200'>
            <h2 className=' text-xl font-semibold text-gray-800 mb-3'> {title}</h2>
            <p className='text-gray-600 mb-5'> {body} </p>
            <button className='bg-blue-500  hover:bg-blue-600 text-white  rounded-lg px-4 py-2'> Read More → </button>
        </div>
    )
}

export default Card