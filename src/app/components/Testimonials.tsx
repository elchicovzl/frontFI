import Image from "next/image";

const Testimonials:React.FC = () => {

    return (
        <div className="py-16 white bg-emerald-600">  
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <h2 className="mb-12 text-center text-2xl text-white font-bold md:text-4xl">Lo que dicen nuestros clientes</h2>
                <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
                    <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
                        <div className="h-full flex flex-col justify-center space-y-4">
                        <Image className="w-20 h-20 mx-auto rounded-full object-cover" src="/images/testimonial1.jpeg" alt="user avatar" height="220" width="220" loading="lazy" />
                        <p className="text-gray-600 md:text-xl"> <span className="font-serif">"</span> Me gusto mucho el trabajo de FRONTERA INMOBILIARIA el señor juan david es muy comprometido con su labor y super cumplido con todos los temas y detalles de principio a fin de la compra de nuestra  casa, la verdad mi esposo y yo nos sentimos muy a gusto con el al dejarle todo el proceso  ya que es un hombre tan responsable, cumplido y claro a la hora de realizar los tramirtes de compra, la inmobiliaria lleno nustras espectativas como clientes y nos ayudo a encontrar el espacio soñado para hacer realidad nuestro sueño  de comprar vivienda, los recominedo mucho como empresa por su compromiso y dedicacion
. <span className="font-serif">"</span></p>
                        <div>
                            <h6 className="text-lg font-semibold leading-none">Daniela Ramírez Restrepo</h6>
                            <span className="text-xs text-gray-500">Cliente</span>
                        </div>
                        </div>
                    </div>

                    <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                        <Image className="w-20 h-20 mx-auto rounded-full" src="/images/testimonial2.jpeg" alt="user avatar" height="220" width="220" loading="lazy" />
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                        <p className="text-gray-600"> <span className="font-serif">"</span> Estamos muy agradecidos con Frontera Inmobiliaria. Hemos podido recrear un nuevo logro familiar. Es gratificante continuar creciendo como familia y agradecemos a esta empresa por ayudarnos a escoger nuestro espacio.
 <span className="font-serif">"</span></p>
                        <div>
                            <h6 className="text-lg font-semibold leading-none">Olmedo Cano</h6>
                            <span className="text-xs text-gray-500">Cliente</span>
                        </div>
                        </div>
                    </div>
                    <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                        <Image className="w-20 h-20 mx-auto rounded-full" src="/images/testimonial4.jpeg" alt="user avatar" height="220" width="220" loading="lazy" />
                        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                        <p className="text-gray-600"> <span className="font-serif">"</span> Muy agradecida con Frontera Inmobiliaria. Estuvieron siempre presentes en mi proceso, de principio a fin, no fue fácil porque vengo de otra ciudad, pero quedó con una gratitud infinita por la labor que ejercen y prestan como empresa. Super recomendados. <span className="font-serif">"</span></p>
                        <div>
                            <h6 className="text-lg font-semibold leading-none">Diana Fernanda Tamayo</h6>
                            <span className="text-xs text-gray-500">Cliente</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Testimonials;