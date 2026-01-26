import HeroImg from "../assets/bg-img.jpg"

const Landingpage = () => {
    return (
        <div className='min-h-screen flex flex-col font-sans'>
            <section
                className="flex flex-1 bg-cover bg-center bg-no-repeat justify-center items-center"
                style={{ backgroundImage: `url(${HeroImg})` }}
            >
                <h2
                    className="text-orange-300 text-7xl text-center font-semibold w-200 z-99"
                >
                    BUILDING TRUSTED CONSTRUCTION AND INFRASTRUCTURE SOLUTIONS</h2>
            </section>
        </div>
    )
}
export default Landingpage
