import React from 'react'

const Button = ({ text, type = "button", className = "" }) => {
    return (
        <button
            type={type}
            className={`border rounded-xl px-4 py-1 cursor-pointer font-semibold bg-orange-300 text-white hover:animate-pulse w-fit ${className}`}
        >
            {text}
        </button>
    )
}

export default Button

