import AboutImg from '../assets/about img.webp';

const About = () => {
    return (
        <section className='min-h-full'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='px-15 pt-10 flex flex-col gap-6'>
                    <div className=''>
                        <h2 className='font-bold text-2xl py-2'>WHO WE ARE</h2>
                        <p className='text-lg'>Paragon Constructions is a trusted construction and infrastructure company delivering reliable, high-quality building solutions. We combine experience, innovation, and professionalism to bring every project to life.</p>
                    </div>

                    <div>
                        <h2 className='font-bold text-2xl'>Our Mission</h2>
                        <p className='text-lg'>
                            Our mission is to provide reliable, safe, and sustainable construction services that meet and exceed client expectations. We aim to deliver projects on time, within budget, and to the highest industry standards while maintaining strong relationships with our clients and partners.
                        </p>
                    </div>

                    <div>
                        <h2 className='font-bold text-2xl'>Our Vision</h2>
                        <p className='text-lg'>We envision becoming a leading construction company recognized for quality workmanship, innovative solutions, and long-term value. Our goal is to contribute to the development of modern infrastructure that supports growth, safety, and community advancement.</p>
                    </div>

                    <div>
                        <h2 className='font-semibold text-2xl'>What We Do</h2>
                        <p className='text-lg'> We specialize in residential and commercial construction, renovations, and infrastructure development. From planning to execution, we ensure every project meets high standards of safety, durability, and design.</p>
                    </div>

                    <div>
                        <h2 className='font-semibold text-2xl'>Why Choose Us</h2>
                        <ul className='text-lg'>
                            <li> ✔ Quality-driven construction</li>
                            <li>✔ Skilled professionals</li>
                            <li>✔ Modern building techniques</li>
                            <li> ✔ Client-focused approach</li>
                        </ul>
                    </div>

                </div>

                <div className='w-full'>
                    <img
                        src={AboutImg}
                        loading="lazy"
                        alt="Paragon construction image"
                        className='w-full object-cover'
                    />
                </div>

            </div>

        </section>
    )
}

export default About
