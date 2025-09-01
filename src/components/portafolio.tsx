import React from 'react'
import Title from './shared/title';
import { dataPortfolio } from '../../data';
import Image from "next/image";
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { Github, Link2 } from "lucide-react";

export default function Portafolio() {
    return (
        <div className="p-4 max-w-3xl mx-auto" id='portfolio'>
            <Title title="Portfolio" subtitle="my work" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
                {dataPortfolio.map((data) => (
                    <div key={data.id} className="p-6 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors duration-300 w-full">
                        <h3 className="text-center text-xl font-medium mb-6 md:mb-8">{data.title}</h3>
                        <Image src={data.image} alt='slider' width={200} height={300}
                            className="rounded-2xl w-full h-auto"
                        />
                        <p className="text-gray-white text-sm mt-1">{data.title}</p>
                        <div className='mt-5 flex gap-2'>
                            <Link className={buttonVariants({variant: 'default'})} href={data.urlDemo} target="_blank">
                                <Link2 size={18} />
                                Demo
                            </Link>
                            <Link className={buttonVariants({variant: 'outline'})} href={data.urlGithub} target="_blank">
                                <Github size={18} />
                                Github
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
