import React from 'react'

export default function Services() {
  return (
    <section className="relative  bg-blueGray-50">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
            <div className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{ 
                    backgroundImage: `url("/images/1.jpg")` 
                }}
                >
            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
            </div>
            <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                    Tu historia comienza con nosotros.
                    </h1>
                    <p className="mt-4 mb-3 text-lg text-white">
                        Frontera Inmobiliaria es una empresa que piensa más haya de la propiedad raíz, 
                        pensamos en las familias, en las personas a las que atendemos diariamente,
                        somos los encargados de ofrecer un espacio en el cual las personas puedan vivir en calma y comodidad,
                        también pensamos en nuestra comunidad y luchamos por mejorarla con empeño.
                    </p>
                </div>
                </div>
            </div>
            </div>
            <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" 
            style={{
                transform: `translateZ(0px)`
            }}>
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
            </div>
        </div>
        <section className="pb-10 bg-blueGray-200 -mt-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                <i className="fas fa-award"></i>
                            </div>
                            <h6 className="text-xl font-semibold">Avaluos</h6>
                            <p className="mt-2 mb-4 text-blueGray-500">
                            En Colombia existen tres tipos de avalúos: 
                            comercial, catastral y para seguros, el resultado de cualquiera de estos sirve como guía de acuerdo con la transacción que se quiera hacer con el inmueble.En varios casos y dependiente de la curaduria o planeación de los municipios tambien requieren avaluos comerciales corporativos.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                <i className="fas fa-retweet"></i>
                            </div>
                            <h6 className="text-xl font-semibold">Estudio topografico con drone</h6>
                            <p className="mt-2 mb-4 text-blueGray-500">
                            Los estudios topográficos se realizan para poder conocer con exactitud algunas características del terreno como la elevación o cotas de los diferentes puntos de una superficie específica, así como las coordenadas exactas en donde se encuentran dichos puntos. 

                            
                            </p>
                            <p className='mt-2 mb-4'>
                            Cada uno de los datos recolectados por el topógrafo permiten la realización de planos y la representación gráfica de la superficie o terreno de interés con las características y condiciones del suelo en la que se quiera llevar a cabo un proyecto de construcción.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                    <i className="fas fa-fingerprint"></i>
                                </div>
                                <h6 className="text-xl font-semibold">Planos y desenglobes</h6>
                                <p className="mt-2 mb-4 text-blueGray-500">
                                Sirve para mantener actualizado el censo predial y para que le sea asignado a cada predio o inmueble la dirección oficial (matricula), la cédula catastral, el CHIP y los avalúos respectivos entre otros.
                                </p>
                                <p>A través de una serie de trámites ante diferentes instancias legales, la idea es que determinado inmueble pueda obtener su matrícula inmobiliaria y sea autónomo de los demás.</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                    <i className="fas fa-fingerprint"></i>
                                </div>
                                <h6 className="text-xl font-semibold">Hipotecas persona natural</h6>
                                <p className="mt-2 mb-4 text-blueGray-500">
                                Son aquellas hipotecas en las cuales personas naturales utilizan su capital para prestarlo a un interés y un tiempo determinado el cual el interesado no esta en la obligación de tomar pero que a diferencia de los bancos es desembolsable en un par de días. Es ideal para comerciantes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                    <i className="fas fa-retweet"></i>
                                </div>
                                <h6 className="text-xl font-semibold">Hipotecas bancarias</h6>
                                <p className="mt-2 mb-4 text-blueGray-500">
                                Es la hipoteca que todos conocen con una tasa de interes mucho mas baja que la hipoteca personal, manejamos cuatro aliados: banco caja social, banco itau, banco BBVA y banco colpatria, este ultimo lo utilizamos mas que todo para colombianos en el exterior. Aplican términos y condiciones.
                                </p>
                                <p className='mt-2 mb-4'>servicios adicionales, certificados de libertad y tradición, certificados de no propiedad.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                <i className="fas fa-award"></i>
                            </div>
                            <h6 className="text-xl font-semibold">Estudio de titulos</h6>
                            <p className="mt-2 mb-4 text-blueGray-500">
                            El estudio de títulos es un análisis que se realiza sobre los antecedentes legales de un inmueble, en el cual se verifica si los títulos de dominio o propiedad del inmueble están conforme a derecho y si sobre el mismo se han constituido hipotecas, servidumbres u otros gravamenes y/o limitaciones al dominio., en pocas palabras, conocer la transparencia del inmueble.
                            </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </section>
  )
}
