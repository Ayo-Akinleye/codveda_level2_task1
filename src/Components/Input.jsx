import React from 'react'

const Input = ({ type, label, className = "", }) => {
    return (
        <div className='flex flex-col gap-1 pb-1'>
            <label>{label}</label>
            <input required
                type={type}
                className={`bg-gray-100 h-9 w-100 rounded-md p-2 focus:outline-none focus:border ${className}`}
            />
        </div>
    )
}

export default Input
