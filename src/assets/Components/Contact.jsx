import privacypolicy from '../Documents/Política_de_Privacidad.pdf'
import React, { useRef } from 'react';  
import emailjs from '@emailjs/browser';

export function Contac() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jufpbwt', 'template_3hkksvk', form.current, '0wGY_KsWAHaLHE3eG')
        .then((result) => {
            alert(result.text);
        }, (error) => {
            alert(error.text);
        });

        e.target.reset();
    };
    

    return (
        <div className="text-gray-600 dark:text-gray-300" id="contact">
            <div className="md:flex md:flex-col md:items-center gap-6">
                <div className="mx-8 mb-6">
                    <h2 className="my-8 text-4xl text-center font-bold text-[#00223B] dark:text-white md:text-5xl">
                        Trabaja con Nosotros
                    </h2>
                    <p className="mt-8 text-gray-700 text-2xl text-center dark:text-gray-300">
                        Déjanos tus datos y nos pondremos en contacto contigo.
                    </p>
                    <p className="mt-4 font-bold text-[#00223B] text-3xl text-center dark:text-primary">
                        ¡Estás a un paso de tu transformación digital!
                    </p>
                </div>
                
                <form ref={form} onSubmit={sendEmail} className="md:5/12 lg:w-1/2 mx-8 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none border pt-4">
                    <div className="px-6 md:px-8 py-4 ">
                        <label className="block text-lg font-medium text-gray-700 dark:text-gray-200" htmlFor="name">
                            Nombres Completos:
                        </label>
                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="user_name"
                                id="name"
                                placeholder="Juan Perez"
                                className="block w-full shadow-sm sm:text-base border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 px-4 py-1 "
                                required
                            />
                        </div>
                        <label className="block text-lg font-medium text-gray-700 dark:text-gray-200" htmlFor="email">
                            Correo Electrónico:
                        </label>
                        <div className="mt-1 mb-4">
                            <input
                                type="email"
                                name="user_email"
                                id="email"
                                placeholder="juanperez@email.com"
                                className="block w-full shadow-sm sm:text-base border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 px-4 py-1 "
                                required
                            />
                        </div>
                        <label className="block text-lg font-medium text-gray-700 dark:text-gray-200" htmlFor="subject">
                            Asunto:
                        </label>
                        <div className="mt-1 mb-4">
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Asunto"
                                className="block w-full shadow-sm sm:text-base border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 px-4 py-1 "
                                required
                            />
                        </div>
                        <label className="block text-lg font-medium text-gray-700 dark:text-gray-200" htmlFor="phone">
                            Teléfono:
                        </label>
                        <div className="mt-1 mb-4">
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="(+57) 322 222 2222"
                                className="block w-full shadow-sm sm:text-base border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 px-4 py-1 "
                                required
                            />
                        </div>
                        <label className="block text-lg font-medium text-gray-700 dark:text-gray-200" htmlFor="message">
                            Mensaje:
                        </label>
                        <div className="mt-1 mb-4">
                            <textarea
                                name="message"
                                id="message"
                                rows="3"
                                placeholder="Escribe tu mensaje aquí..."
                                className="block w-full shadow-sm sm:text-base border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 px-4 py-1 "
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox md:h-5 md:w-5 text-primary border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                                    required
                                />
                                <span className="ml-2 text-gray-700 dark:text-gray-200 text-xs md:text-sm">
                                    Acepto la <a href={privacypolicy} target='_blank'>política de privacidad</a>
                                </span>
                            </label>
                        </div>
                        <div className="flex justify-center my-4">
                            <button
                                type='submit'
                                id="sendMail"
                                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                                >
                                <span className="relative text-base font-semibold text-white">
                                    <i className="fa-solid fa-paper-plane mr-3"></i>
                                    Enviar
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}