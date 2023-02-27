export function Contac() {
    return (
        <div className="text-gray-600 dark:text-gray-300" id="contact">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 md:flex md:items-center gap-6">
                <form className="md:5/12 lg:w-1/2 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none border">
                    <div className="px-6 md:px-8 py-4 ">
                        <label className="block text-base font-medium text-gray-700 dark:text-gray-200" htmlFor="name">
                            Nombres Completos:
                        </label>
                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Juan Perez"
                                className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 px-4 py-1 "
                            />
                        </div>
                        <label className="block text-base font-medium text-gray-700 dark:text-gray-200" htmlFor="email">
                            Correo Electrónico:
                        </label>
                        <div className="mt-1 mb-4">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="juanperez@email.com"
                                className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 px-4 py-1 "
                            />
                        </div>
                        <label className="block text-base font-medium text-gray-700 dark:text-gray-200" htmlFor="phone">
                            Teléfono:
                        </label>
                        <div className="mt-1 mb-4">
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="(+51) 999 999 999"
                                className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 px-4 py-1 "
                            />
                        </div>
                        <label className="block text-base font-medium text-gray-700 dark:text-gray-200" htmlFor="message">
                            Mensaje:
                        </label>
                        <div className="mt-1 mb-4">
                            <textarea
                                name="message"
                                id="message"
                                rows="3"
                                placeholder="Escribe tu mensaje aquí..."
                                className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 px-4 py-1 "
                            ></textarea>
                        </div>
                    </div>
                </form>
                <div className="md:w-2/3 lg:w-1/2">
                    <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
                        Hablemos
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        ¿Estás interesado/a en trabajar con nosotros? Contáctanos hoy mismo para obtener más información sobre nuestros servicios y cómo podemos ayudarte a mejorar tu presencia en línea. Ya sea que prefieras enviar un correo electrónico o llamar por teléfono, nuestro equipo está aquí para responder a tus preguntas y ayudarte en todo lo que necesites. ¡Esperamos saber de ti pronto!
                    </p>
                </div>
            </div>
        </div>
    )
}