import HeroImg from "../assets/bg-img.webp"

const Landingpage = () => {
    return (
        <section
            className="h-full flex font-sans bg-cover bg-center bg-no-repeat justify-center items-center"
            style={{ backgroundImage: `url(${HeroImg})` }}
        >
            <h2
                className="text-orange-300 text-7xl text-center font-bold max-w-4xl"
            >
                BUILDING TRUSTED CONSTRUCTION AND INFRASTRUCTURE SOLUTIONS</h2>
        </section>
    )
}
export default Landingpage
