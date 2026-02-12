import Input from './Input';
import Button from './Button';

const Form = () => {
    return (
        <form action="" className='flex flex-col gap-2 text-lg'>

            <Input
                type="text"
                label="Full name:"
            />

            <Input type="email" label="Email address: " />

            <Input type="text" label="Subject: " />

            <Input type="text" label="Message: " className='h-30' />

            <Button
                text="Submit" className='ml-77'
            />
        </form>
    )
}

export default Form
