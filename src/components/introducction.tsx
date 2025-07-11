import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";
import Image from "next/image";
import Container from "./shared/container";

const Introduction = () => {
    return (
        <Container>
            <div className="text-center px-4 py-12 md:py-16" id='home'>
                {/* Header Section */}
                <div className="mb-8">
                    <h3 className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-2">
                        Hello I&apos;m
                    </h3>
                    <h1 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
                        Willams Muñoz
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 dark:text-gray-300">
                        Frontend Developer
                    </p>
                </div>

                {/* Buttons Section */}
                <div className="flex justify-center gap-4 mb-12">
                    <Link 
                        href="#contact" 
                        className={`${buttonVariants({ variant: "default" })} gap-2 px-6 py-3`}
                    >
                        <Mail size={18} />
                        Contact me
                    </Link>
                    <Link 
                        href="/cv-tarre.pdf" 
                        target="_blank"
                        className={`${buttonVariants({ variant: "outline" })} gap-2 px-6 py-3`}
                    >
                        <Paperclip size={18} />
                        Download CV
                    </Link>
                </div>

                {/* Profile Image */}
                <div className="relative w-full max-w-md mx-auto aspect-square">
                    <Image 
                        src='/profile.png' 
                        alt="Willams Muñoz Profile" 
                        fill
                        className=" object-cover "
                        sizes="(max-width: 768px) 80vw, 50vw"
                        priority
                    />
                </div>
            </div>
        </Container>
    );
}

export default Introduction;