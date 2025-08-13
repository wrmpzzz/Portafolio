import React from 'react'
import Title from './shared/title'
import { dataContact } from '../../data'
import Link from 'next/link'
import ContactForm from './contact-form'

export default function Contact() {
    return (
        <div className="px-6 py-12 max-w-3xl mx-auto" id="contact">
            <Title title="Contact me" subtitle="get in touch" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {dataContact.map((data) => (
                    <div
                        key={data.id}
                        className="flex flex-col items-center p-6 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors duration-300 w-full">
                        <div className="text-gray-700 dark:text-gray-300 mb-3">
                            {data.icon}
                        </div>
                        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                            {data.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-center text-sm mt-1 mb-4">
                            {data.subtitle}
                        </p>
                        <Link
                            href={data.link}
                            target="_blank"
                            className="text-center px-4 py-2 text-sm rounded-full bg-gray-100 dark:bg-transparent duration-300 w-full border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)]"
                        >
                            Link
                        </Link>
                    </div>
                ))}
            </div>
            <div className='col-span-2'>
                <ContactForm />
            </div>
        </div>
    )
}