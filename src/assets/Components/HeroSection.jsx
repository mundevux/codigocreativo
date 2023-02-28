import React from 'react'
import { useState, useEffect} from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import '../../index.css'

const arrayOfWords = ['Branding', 'Marketing', 'Desarrollo Web'];

export function HeroSection() {
    

    const [paragraphs, setParagraphs] = useState('');
    const [paragraphsCounter, setParagraphsCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setParagraphsCounter((currentValue)=>{
                if (currentValue +1 === arrayOfWords.length) {
                    return 0;
                }
                return currentValue + 1;
            });
        }, 3000);  
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative" id="home">
            <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-600 dark:from-blue-900"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-900 to-sky-800 dark:to-indigo-800"></div>
            </div>
            <div className="mx-auto px-6 md:px-12 xl:px-6">
                <div className="relative pt-36 ml-auto">
                    <div className="lg:w-2/3 text-center mx-auto">
                        <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl mb-4">
                            Somos tu mejor aliado en <br></br>
                            <SwitchTransition>
                                <CSSTransition
                                    key={arrayOfWords[paragraphsCounter]}
                                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                                    classNames='fade'
                                >
                                    <span> {arrayOfWords[paragraphsCounter]}</span>
                                </CSSTransition>
                            </SwitchTransition>
                            .
                        </h1>
                        <p className="mt-8 text-gray-700 dark:text-gray-300 ">
                            Bienvenid@ a nuestra agencia. Somos un equipo de expertos en marketing digital comprometidos en ayudar a nuestros clientes a alcanzar los objetivos de su negocio. Con nuestra combinación única de estrategias innovadoras y creativas, podemos ayudarte a mejorar tu presencia en línea y aumentar tus ventas. 
                        </p>
                        <p className="mt-8 text-gray-700 dark:text-gray-300">
                            ¿Estás list@ para empezar a trabajar con nosotros?
                        </p>
                        <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                            <a href="#" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                <span className="relative text-base font-semibold text-white"><i className="fa-regular fa-calendar mr-2"></i>Agenda una cita</span>
                            </a>
                        </div>
                        <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Comprension del público objetivo</h6>
                                <p className="mt-2 text-gray-500">Nos enfocamos en comprender el público de nuestros clientes, creando estrategias personalizadas para llegar ese público.</p>
                            </div>
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Enfoque en la creatividad</h6>
                                <p className="mt-2 text-gray-500">Tenemos un enfoque innovador y creativo el cual nos permite ofrecer soluciones únicas a los desafíos de marketing.</p>
                            </div>
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Especialización en múltiples canales</h6>
                                <p className="mt-2 text-gray-500">Nos especializamos en múltiples canales, desde SEO y PPC hasta marketing de contenido, redes sociales y más.</p>
                            </div>
                        </div>
                    </div>
                    {/* Seccion correspondiente a los logos de los clientes
                    <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
                        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                            <img src="./images/clients/microsoft.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                        </div>
                        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                            <img src="./images/clients/airbnb.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                        </div>
                        <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                            <img src="./images/clients/google.svg" className="h-9 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
                        </div>
                        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                            <img src="./images/clients/ge.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                        </div>
                        <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                            <img src="./images/clients/netflix.svg" className="h-8 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
                        </div>
                        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                            <img src="./images/clients/google-cloud.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                        </div>
                    </div>
                    */}
                </div>
            </div>
        </div>
    )
}