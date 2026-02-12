import ServiceCard from "../Components/ServiceCard";
import ResidentialImg from "../assets/residential image.webp";
import CommercialImg from "../assets/Commercial construction.webp";
import RenovationImg from '../assets/renovation construction.webp';

const Services = () => {
  return (
    <section className="h-full flex flex-col px-15 py-2 gap-5">
      <h1 className="font-bold text-3xl text-center py-5">OUR SERVICES</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard
          image={ResidentialImg}
          title="Residential Construction"
          description="We specialize in designing and building high-quality homes that perfectly match your lifestyle and vision. From modern apartments to luxurious villas, our team ensures every detail is executed with precision, safety, and durability in mind."

        />

        <ServiceCard
          image={CommercialImg}
          title="Commercial Construction"
          description="Our expertise extends to commercial buildings, including offices, retail spaces, and industrial facilities. We combine functionality with design to deliver projects on time and within budget."
        />

        <ServiceCard
          image={RenovationImg}
          title="Renovation & Infrastructure"
          description="We provide renovation services and infrastructure development, improving the performance, safety, and visual appeal of your existing structures. Our team handles everything from planning to execution."

        />
      </div>
    </section>
  )
}

export default Services
