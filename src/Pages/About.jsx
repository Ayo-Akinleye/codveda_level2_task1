import AboutImg from '../assets/about img.jpg';

const About = () => {
    return (
        <section className='min-h-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='px-8 flex items-center'>
                    <h2>WHO WE ARE</h2>
                    <p>Paragon Constructions is a trusted construction and infrastructure company delivering reliable, high-quality building solutions. We combine experience, innovation, and professionalism to bring every project to life.</p>

                    <p>What We Do

                        We specialize in residential and commercial construction, renovations, and infrastructure development. From planning to execution, we ensure every project meets high standards of safety, durability, and design.</p>

                    <p>
                        Our Commitment

                        We are committed to quality workmanship, timely delivery, and transparent communication. Our goal is to build structures that last — and relationships built on trust.
                    </p>

                    <p>
                        Why Choose Us

                        ✔ Quality-driven construction
                        ✔ Skilled professionals
                        ✔ Modern building techniques
                        ✔ Client-focused approach
                    </p>
                </div>

                <div className='w-full'>
                    <img
                        src={AboutImg}
                        alt="Paragon construction image"
                        className='w-full object-cover'
                    />
                </div>

            </div>

        </section>
    )
}

export default About
