import { Phone } from "lucide-react";
import { dataAboutMe, dataSlider } from "../../data";
import Title from "./shared/title";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="p-2 md:px-12 max-w-5xl mx-auto" id="about">
            <Title title="About me" subtitle="know me" />
            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justify-center">
                    <Carousel opts={{
                        align: 'start'
                    }}
                        orientation="vertical"
                        className="w-full max-w-xs h-fit"
                    >
                        <CarouselContent className="-mt-1 h-[230px]">
                            {dataSlider.map((data) => (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image src={data.url} alt='slider' width={250} height={400}
                                            className="rounded-2xl w-full h-auto"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div>
                    <div className="grid md:grid-cols-2 mt-7 gap-4">
                        {dataAboutMe.map((data) => (
                            <div
                                key={data.id}
                                className="border border-white-10 rounded-2xl p-4 shadow-md shadow-gray-400 dark:bg-transparent hover:scale-101 md:scale-105 transition-all duration-300  "
                            >
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="my-8 text-justify"> 💻 Desarrollador Frontend | 21 años

                        Apasionado por crear interfaces intuitivas y eficientes con JavaScript, React y Tailwind CSS. Disfruto transformar diseños en experiencias digitales fluidas, donde cada píxel y cada interacción cuentan.

                        Mi enfoque va más allá del código: busco soluciones que equilibren rendimiento, mantenibilidad y elegancia. Siempre aprendiendo, siempre mejorando.</p>

                    <Button>
                        <Phone size={20} className="mr-2" /> Hablamos
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;