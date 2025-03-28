import Link from 'next/link';
import { withHttps } from "Utils";
import { Social } from "Constants";
import { Icon } from 'Components';

export const ContactMe = () => {

    return (
        <div className="container mx-auto px-5 mb-5" id='contact-me'>
            <div className='flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-6'>
                <div className="md:basis-2/4 w-full flex flex-col gap-6">
                    <h2 className="w-fit bg-lavender bg-clip-text text-transparent font-bold text-3xl sm:text-5xl capitalize">contact me</h2>
                    <p className="text-primary font-normal md:[350px] lg:w-[600px] dark:text-white">Have a project in mind or just want to say hello? Feel free to reach out to me. I’m always open to discussing new ideas, creative projects, or opportunities to be part of your vision.</p>

                    <Link href='mailto:farshadniakimia@gmail.com' className="font-bold text-secondary dark:text-white text-lg md:text-xl">Farshadniakimia@gmail.com</Link>
                    
                    <div>
                        <ul className='flex items-center gap-6'>
                            {
                                Social.map((item) => (
                                    <li key={item.id} className='flex items-center rounded-full w-9 h-9'>
                                        <Link href={withHttps(item.href)} target='_blank'>
                                            <Icon iconName={item.name} size='xl' className='text-secondary dark:text-white hover:scale-110 duration-300 hover:text-purple dark:hover:text-purple' />
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}