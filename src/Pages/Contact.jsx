import Form from '../Components/Form'

const Contact = () => {
  return (
    <section className='h-full grid md:grid-cols-2 px-15 pt-3 gap-10'>

      {/* first half */}
      <div className='flex flex-col gap-2'>
        <h2 className='font-bold text-2xl py-2'>Contact Us</h2>
        <Form />
      </div>

      {/* second half */}
      <div className='flex flex-col pr-5 gap-5'>

        <div className='pr-8'>
          <h3 className='font-bold text-2xl py-2'>Inquiries</h3>
          <p className='text-lg'>For any inquiries, questions or recommendations,<br /> please call: 123-456-7890</p>
        </div>

        <div>
          <h1 className='font-bold text-2xl py-2'>Head Office</h1>
          <p className='text-lg'>Level 5, Paragon Towers, Central Business District <br />
            <span className='underline text-blue-500 cursor-pointer'>www.paragonconstructions.com </span><br />
            Tel: 123-456-7890 <br />
            Fax: 123-456-7890
          </p>
        </div>

        <div>
          <h1 className='font-bold text-2xl py-2'>Employment</h1>
          <p className='text-lg'>To apply for a job with Paragon Constructions,<br />please send a cover letter together with your C.V. to: <span className='underline text-blue-500 cursor-pointer'>info@paragon.com</span></p>
        </div>

      </div>
    </section>
  )
}

export default Contact
