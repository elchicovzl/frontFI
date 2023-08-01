

const Contact: React.FC = () => {

    return (
        <div className="flex my-20 items-center justify-start bg-white">
            <div className="mx-auto w-full max-w-lg">
                <h1 className="text-2xl font-bold md:text-4xl">Contáctanos</h1>  
                <p className="mt-3">Déjanos un mensaje aquí:</p>

                <form action="https://api.web3forms.com/submit" className="mt-10">

                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
                <div className="grid gap-6 sm:grid-cols-2">
                    <div className="relative z-0">
                    <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-emerald-600 focus:outline-none focus:ring-0" placeholder=" " />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500">Nombre</label>
                    </div>
                    <div className="relative z-0">
                    <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-emerald-600 focus:outline-none focus:ring-0" placeholder=" " />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500">Correo eléctronico</label>
                    </div>
                    <div className="relative z-0 col-span-2">
                    <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-emerald-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500">Tu mensaje</label>
                    </div>
                </div>
                <button type="submit" className="mt-5 rounded-md bg-black px-10 py-2 text-white">Enviar Mensaje</button>
                </form>
            </div>
        </div>
    );
}
 
export default Contact;