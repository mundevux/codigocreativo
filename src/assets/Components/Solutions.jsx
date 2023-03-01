import estrategiaIcon from '/public/images/icons/estrategia.png'
import creativoIcon from '/public/images/icons/creatividad.png'
import brandingIcon from '/public/images/icons/branding.png'
import posicionamientoIcon from '/public/images/icons/posicionamiento.png'


export function Solutions() {
    return (
        <div id="solutions">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-sky-500">
                    <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
                </svg>
                <div className="space-y-6 text-gray-600 md:flex  md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
                    <div className="md:7/12 lg:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white my-8">
                            Nuestros Servicios
                        </h2>
                    </div>
                </div>

                <div
                        className="mt-8 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4"
                >
                    <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div className="relative space-y-8 py-12 p-8">
                                <img
                                    src={creativoIcon}
                                    className="w-12"
                                    width="512"
                                    height="512"
                                    alt="Marketing illustration"
                                />

                                <div className="space-y-2">
                                    <h5
                                        className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                                    >
                                        Creatividad
                                    </h5>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Generamos ideas innovadoras y atractivas para las campañas de marketing de nuestros clientes siguiendo las últimas tendencias del mercado.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                            <div className="relative space-y-8 py-12 p-8">
                                <img
                                    src={estrategiaIcon}
                                    className="w-12"
                                    width="512"
                                    height="512"
                                    alt="burger illustration"
                                />

                                <div className="space-y-2">
                                    <h5
                                        className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                                    >
                                        Estrategia
                                    </h5>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Nos enfocamos en ofrecer soluciones personalizadas para cada uno de nuestros clientes. Entendiendo las necesidades unicas de su negocio.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                            <div className="relative space-y-8 py-12 p-8">
                                <img
                                    src={brandingIcon}
                                    className="w-12"
                                    width="512"
                                    height="512"
                                    alt="burger illustration"
                                />

                                <div className="space-y-2">
                                    <h5
                                        className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                                    >
                                        Branding
                                    </h5>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Creamos una imgen e identidad unica permintiendo que nuestros clientes se destaquen en un mercado cada vez mas competitivo. 
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                        <div
                            className="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
                        >
                            <div
                                className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800"
                            >
                                <img
                                    src={posicionamientoIcon}
                                    className="w-12"
                                    width="512"
                                    height="512"
                                    alt="burger illustration"
                                />

                                <div className="space-y-2">
                                    <h5
                                        className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
                                    >
                                        Y muhco más...
                                    </h5>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Ofrecemos una amplia gama de servicios para que tu negocio se destaque, investigando el mercado detalladamente para ofrecerte la mejor solución.
                                    </p>
                                </div>
                            
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    )

}