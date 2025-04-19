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
        description: "Development, Scrapping, ELT, ML, DL, PySpark, Streamlit, etc",
    },
    {
        icon: <Code/>,
        title: "R",
        description: "RStudio, Development, tidyverse, ML, OSPSuite, SparkR, etc",
    },
    {
        icon: <Database/>,
        title: "SQL",
        description: "MySQL, SQL Server, PosgreSQL: in DQL and DML tasks",
    },
    {
        icon: <BarChartBig />,
        title: "Power BI",
        description: "Manipulación de datos con M, limpieza con Power Query, implementación de medidas con DAX, fondos (Figma), modelado de datos",
    },
    {
        icon: <CandlestickChart />,
        title: "Tableau",
        description: "Modelado de datos con bend y conexiones, implementación de campos calculados usando SQL, diseño de dashboards",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "⛅Morriña en Galicia",
        image: "/image-galiziaweather.png",
        urlGithub: "https://github.com/Freuq/galizia_weather",
        urlDemo: "https://galiziaweather.streamlit.app",
    },
    /* {
        id: 2,
        title: "Recomendador para contratación en RRHH",
        image: "/image-nlp.png",
        urlGithub: "/error",
        urlDemo: "https://docs.google.com/presentation/d/1DmXi82t-lph2EGq6bsteWj3jHkB_EUvc5TLVrWrhKtY/edit?usp=sharing",
    } ,*/
    {
        id: 3,
        title: "Sector Inmobiliario",
        image: "/image-sectorinmobiliario.png",
        urlGithub: "/error",
        urlDemo: "https://docs.google.com/presentation/d/1KgWz8XbZJF9RCYC9OU_mJKxXd5_WoeaB7f7WV4e1ngg/edit?usp=sharing",
    },
    {
        id: 4,
        title: "Mapa Eurocopa 2024",
        image: "/image-mapeuro.png",
        urlGithub: "https://github.com/Freuq/map_euro2024",
        urlDemo: "https://www.linkedin.com/posts/freuq_hoy-es-la-final-de-la-eurocopa-2024-y-activity-7218321583596027904-kPYl?utm_source=share&utm_medium=member_desktop",
    },
    {
        id: 5,
        title: "Valorant: Sep-Oct",
        image: "/image-valorant.png",
        urlGithub: "https://github.com/Freuq/Valorant-Sep-Oct",
        urlDemo: "/reports",
    },
    {
        id: 6,
        title: "AdventureWorks 2019",
        image: "/image-adventureworks.png",
        urlGithub: "https://github.com/Freuq/AdventureWorks2019",
        urlDemo: "/reports",
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
        name: "",
        description:
            "",
        imageUrl: "/profile1.png",
    }
];

export const powerBIReports = [
    {
      id: 1,
      title: "Valorant: Sep-Oct",
      url: "https://app.powerbi.com/view?r=eyJrIjoiMmMyZjhkMDgtZWI0NS00Y2NkLThmZWItODQxNmViMTEzYzRkIiwidCI6IjAyNzYxMDQwLWRkYzYtNDU5NS05OTk2LTMyNzc0YTFmOTJmMyIsImMiOjl9"
    },
    {
      id: 2,
      title: "Adventure Works 2019",
      url: "https://app.powerbi.com/view?r=eyJrIjoiYjA1NDhhODItMjRlOS00ZmM2LTg4MGEtMDg5MDlhZjY2Y2E2IiwidCI6IjAyNzYxMDQwLWRkYzYtNDU5NS05OTk2LTMyNzc0YTFmOTJmMyIsImMiOjl9"
    }
  ];
  