import AvatarService from "@/components/avatar-service";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import Link from 'next/link';

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            {/*<CircleImage />*/}
            {/*<AvatarService />*/}
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
                <ContainerPage> 
                <div className="max-w-[350px] mt-5 md:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                        Mis{" "}
                        <span className="font-bold text-secondary">
                            tecnologías👨‍💻.
                        </span>
                    </h1>
                        <p className="mb-3 justify-center text-xl text-gray-300">
                        Me dedico a concluir y a tomar decisiones en base a datos siguiendo tareas, como:<br />
                        🧹 Procesamiento de datos: recopilación, limpieza, transformación y EDA (análisis exploratorio de datos). <br />
                        📊 Análisis de datos (descriptivo y predictivo), aplicación de algoritmos, visualizaciones y storytelling.<br />
                        </p>
                    <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=alfreuq@gmail.com">
                        <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
                            Contacta conmigo
                            <br />
                        </button>
                    </Link>
                </div>
                <br />
                <div>
                    <SliderServices />
                </div>
                </ContainerPage>
            </div>
        </>
    );
}

export default ServicesPage;