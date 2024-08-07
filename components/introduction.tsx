"use client"

import Image from "next/image";
import Link from 'next/link';
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="200" height="200" alt="Profile pic" />

                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Data{" "}
                        <TypeAnimation 
                        
                        sequence={[
                            "Analyst",
                            1000,
                            "Scientist",
                            1000,
                            "Enthusiast",
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-secondary"
                        
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                    Mi nombre es Alfredo Enrique, y sobre todo lo demás, soy amante de los datos. Soy licenciado en Geoquímica, y me he especializado durante los últimos años en el área del Análisis de Datos, donde me he mantenido en continuo aprendizaje. 
                    </p>

                    <div className="flex item-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link href="/portfolio" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/15">
                            Ver proyectos
                        </Link>
                        <Link href="/Alfredo_Blanco_CV.pdf" className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary  border-secondary w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/20">
                            Curriculum Vitae
                        </Link>
                    </div>
                </div>
            </div>
        
        </div>
     );
}

export default Introduction ;