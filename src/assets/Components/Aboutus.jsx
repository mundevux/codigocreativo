
export function Aboutus() {
    return (
        <div id="aboutus">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 md:flex md:items-center gap-6">
                <div className="md:w-2/3 lg:w-1/2 py-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-secondary">
                        <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
                    </svg>

                    <h2 className="my-8 font-bold text-gray-700 dark:text-white text-3xl md:text-4xl">
                        Nosotros
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Nuestro equipo está formado por expertos en <b>marketing digital</b>, <b>diseño web</b> y <b>desarrollo de software</b>. Nos enorgullece ofrecer a nuestros clientes <b>soluciones personalizadas</b> que se adaptan a sus necesidades específicas. Con una amplia gama de servicios, desde el <b>diseño de sitios web</b> hasta la <b>gestión de redes sociales</b>, estamos aquí para ayudarte a alcanzar tus <b>objetivos de negocio</b>.
                    </p>
                </div>

                <div className="md:5/12 lg:w-1/2">
                        <img
                            src="./images/pie.svg"
                            alt="image"
                            loading="lazy"
                            width=""
                            height=""
                            className="w-full"
                        />
                </div>

            </div>
        </div>
    )
}