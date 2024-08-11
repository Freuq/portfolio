import { BookText, Folder, HomeIcon, UserRound, Linkedin, Rss, BarChartBig, CandlestickChart, Speech, Mail, Github, Database, Code } from "lucide-react";




export const socialNetworks = [
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/freuq/",
    },
    {
        id: 3,
        logo: <Mail size={30} strokeWidth={1} />,
        src: "mailto:alfreuq@gmail.com",
    },
    {
        id: 4,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/Freuq/",
    },
    {
        id: 5,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "https://www.novypro.com/profile_projects/freuq",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/techs",
    },
    {
        id: 4,
        title: "Target",
        icon: <Folder size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const dataAboutPage = [
    {
        id: 0,
        title: "Data Scientist Consultant",
        subtitle: "Hanbai.io",
        description: "Realización de modelo DL que logra mejorar la precisión en la selección de candidatos durante la primeras fases de entrevista, a partir de un modelo de NLP que genera recomendaciones automatizadas basadas en análisis semántico y contextual. Por medio de técnicas de embeddings, logrando una precisión del 77%",
        date: "Jul 2024",
    },
    {
        id: 1,
        title: "Data Scientist",
        subtitle: "Freelancer",
        description: "Realización de Web Scrapping en portales inmobiliarios para realización de procesos ETL y EDA para determinar las variables más importantes del mercado. Generación de modelos de ML con la finalidad de predecir el alquiler de un inmueble en base a sus características y si será o no alquilado a lo largo de dos meses en el mercado.",
        date: "Ene 2024",
    },
    {
        id: 2,
        title: "Data Analyst",
        subtitle: "Prácticas",
        description: "Lideré procesos de extracción, limpieza, transformación y EDA de KPIs obtenidos por el equipo de Rock-Eval 6, para obtener parámetros estadísticos e indicadores químicos que resaltaron relaciones y tendencias en diferentes pozos petrolíferos, logrando una correlación entre los diferentes pozos petrolíferos para ordenar por rendimiento y capacidad de extracción (valor económico).",
        date: "Oct 2021",
    },
    {
        id: 3,
        title: "Redactor de contenidos web",
        subtitle: "Freelancer",
        description: "Uso del storytelling para la redacción de textos claros, concisos y atractivos que buscan captar audiencias técnicas y no técnicas durante un año. Implementación de técnicas SEO y SEM con el fin del crecimiento orgánico en los motores de búsqueda. Utilizando el paquete Microsoft.",
        date: "Nov 2020",
    },
    {
        id: 4,
        title: "Guía turístico",
        subtitle: "Acamparavila",
        description: "Planificar y ejecutar rutas de montaña, comunicación efectiva dentro del equipo, capacidad para liderar y coordinar grupos extensos de personas, adaptándonos de manera óptima a las circunstancias para poder brindar un excelente servicio al cliente.",
        date: "Jun 2018",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 10,
        text: "Proyectos finalizados",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Code/>,
        title: "Python",
        description: "Scrapping, Development, ELT, Machine Learning, Deep Learning, PySpark, Streamlit, entre otras",
    },
    {
        icon: <Database/>,
        title: "SQL",
        description: "Utilizando MySQL o SQL Server, tengo manejo de consulta de datos (DQL) y de manipulación de datos (DML)",
    },
    {
        icon: <BarChartBig />,
        title: "Power BI",
        description: "Manipulación de datos con M, implementación de medidas con DAX, backgrounds (Figma), modelado de datos",
    },
    {
        icon: <CandlestickChart />,
        title: "Tableau",
        description: "Modelado de datos con bend y conexiones, implementación de campos calculados usando SQL",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Recomendador para contratación en RRHH",
        image: "/image-nlp.JPG",
        urlGithub: "/error",
        urlDemo: "https://docs.google.com/presentation/d/1DmXi82t-lph2EGq6bsteWj3jHkB_EUvc5TLVrWrhKtY/edit?usp=sharing",
    },
    {
        id: 2,
        title: "Predicción de Alquiler por medio de DL",
        image: "/image-preddiction.JPG",
        urlGithub: "/error",
        urlDemo: "",
    },
    {
        id: 3,
        title: "EDA: Para Alquiler Sector Inmobiliario",
        image: "/image-eda.JPG",
        urlGithub: "/error",
        urlDemo: "https://docs.google.com/presentation/d/1KgWz8XbZJF9RCYC9OU_mJKxXd5_WoeaB7f7WV4e1ngg/edit?usp=sharing",
    },
    {
        id: 4,
        title: "Mapa de: Eurocopa Alemania 2024",
        image: "/image-mapeuro.JPG",
        urlGithub: "https://github.com/Freuq/map_euro2024",
        urlDemo: "https://www.linkedin.com/posts/freuq_hoy-es-la-final-de-la-eurocopa-2024-y-activity-7218321583596027904-kPYl?utm_source=share&utm_medium=member_desktop",
    },
    {
        id: 5,
        title: "Valorant: Sep-Oct",
        image: "/image-valorant.png",
        urlGithub: "https://github.com/Freuq/Valorant-Sep-Oct",
        urlDemo: "https://app.powerbi.com/view?r=eyJrIjoiMmMyZjhkMDgtZWI0NS00Y2NkLThmZWItODQxNmViMTEzYzRkIiwidCI6IjAyNzYxMDQwLWRkYzYtNDU5NS05OTk2LTMyNzc0YTFmOTJmMyIsImMiOjl9",
    },
    {
        id: 6,
        title: "AdventureWorks 2019",
        image: "/image-adventureworks.png",
        urlGithub: "https://github.com/Freuq/AdventureWorks2019",
        urlDemo: "https://app.powerbi.com/view?r=eyJrIjoiYjA1NDhhODItMjRlOS00ZmM2LTg4MGEtMDg5MDlhZjY2Y2E2IiwidCI6IjAyNzYxMDQwLWRkYzYtNDU5NS05OTk2LTMyNzc0YTFmOTJmMyIsImMiOjl9",
    },
    {
        id: 7,
        title: "Google Fiber",
        image: "/image-googlefiber.png",
        urlGithub: "https://github.com/Freuq/Google-Fiber-Project",
        urlDemo: "https://public.tableau.com/views/GoogleFiberCase/WHY_1?:language=es-ES&:sid=&:display_count=n&:origin=viz_share_link",
    },
    {
        id: 8,
        title: "Cyclistic Company",
        image: "/image-cyclistic.png",
        urlGithub: "https://github.com/Freuq/Task_1-Cyclistic",
        urlDemo: "https://public.tableau.com/app/profile/alfreuq/viz/Cyclisticcase_17068949387110/HowusertypeuseCyclistic",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];