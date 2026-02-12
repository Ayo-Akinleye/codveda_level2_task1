// import HeroImg from "../assets/bg-img.webp"
// import { Helmet } from 'react-helmet'

const Landingpage = () => {
    return (
        <>
            {/* <Helmet>
                <link rel="preload" as="image" href={HeroImg} fetchpriority="high" />
            </Helmet> */}

            <section
                className="h-full flex font-sans justify-center items-center"
                style={{ position: 'relative' }}
            >
                <img
                    src="/public/bg-img.webp"
                    alt="Hero Image"
                    fetchPriority="high"
                    width="1200"
                    height="800"
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                />
                <h2
                    className="text-orange-300 text-7xl text-center font-bold max-w-4xl"
                >
                    BUILDING TRUSTED CONSTRUCTION AND INFRASTRUCTURE SOLUTIONS</h2>
            </section>
        </>

    )
}
export default Landingpage
