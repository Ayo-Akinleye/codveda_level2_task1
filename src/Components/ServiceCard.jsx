import React from 'react'

const ServiceCard = ({ title, description, image }) => {
    return (
        <div className='bg-orange-300 rounded-xl pb-2'>
            <img src={image} alt={title} loading="lazy" className='h-48 w-full object-cover rounded-t-xl' />
            <h3 className='px-4 py-2  font-semibold text-2xl'>{title}</h3>
            <p className='px-4 py-2'>{description}</p>
        </div>
    )
}

export default ServiceCard
