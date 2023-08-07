"use client"

import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Nombre es requerido"
    }),
    email: z.string().min(1, {
        message: "Email es requerido"
      }).email({
        message: "debe ser un email válido",
      }),
    message: z.string().min(1, {
        message: "Mensaje es requerido"
    }),
  });

const Contact: React.FC = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
      } = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                name: "",
                email: "",
                message: ""
            }
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setIsLoading(true);
            const response = await axios.post('/api/contact', values);

            reset();
            toast.success("Mensaje enviado.");
    
        } catch (error: any) {
          if (error?.response?.status === 403) {
          } else {
            toast.error("Al malo ocurrió.");
          }
        } finally {
            setIsLoading(false);
        }
      }

    return (
        <div className="flex my-20 px-5 items-center justify-start bg-white">
            <div className="mx-auto w-full max-w-lg">
                <h1 className="text-2xl font-bold md:text-4xl">Contáctanos</h1>  
                <p className="mt-3">Déjanos un mensaje aquí:</p>

                <form action="https://api.web3forms.com/submit" className="mt-10" onSubmit= {handleSubmit(onSubmit)}> 
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="relative z-0">
                            <input {...register("name")} disabled={isLoading} type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-emerald-600 focus:outline-none focus:ring-0" placeholder=" " />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500">Nombre</label>
                            {errors.name && (
                                <p className="text-xs italic text-red-500 mt-2"> {errors.name?.message}
                                </p>
                            )}
                        </div>
                        <div className="relative z-0">
                            <input {...register("email")} disabled={isLoading} type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-emerald-600 focus:outline-none focus:ring-0" placeholder=" " />
                            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500">Correo eléctronico</label>
                            {errors.email && (
                                <p className="text-xs italic text-red-500 mt-2"> {errors.email?.message}
                                </p>
                            )}    
                        </div>
                        <div className="relative z-0 col-span-2">
                        <textarea {...register("message")} disabled={isLoading} name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-emerald-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500">Tu mensaje</label>
                            {errors.message && (
                                <p className="text-xs italic text-red-500 mt-2"> {errors.message?.message}
                                </p>
                            )} 
                        </div>
                    </div>
                    <button type="submit" className="flex mt-5 rounded-md bg-black px-10 py-2 text-white">
                        {isLoading && (
                                <Loader2 className="mt-[4px] mr-2 h-4 w-4 animate-spin text-white" />
                            )} 
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </div>
    );
}
 
export default Contact;