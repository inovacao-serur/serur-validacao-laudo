"use client"
import Navbar from "@/app/components/Navbar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AnaliseInfo() {
    const [isAnalfabeto, setIsAnalfabeto] = useState(false) 
    return (
        <>
            <Navbar />
            <section className="bg-gray-50 px-3 flex flex-col lg:px-20 " style={{ height: 'calc(100vh - 4rem)' }}>
                <div className="pt-2">
                    <h1 className="font-normal text-lg lg:text-2xl">Nova Análise</h1>
                    <div>
                        <ul className="flex items-center text-sm gap-1.5 mt-2 xz:mt-4 sm:gap-3 xl:gap-5">
                            <li className=" text-gray-600"><span className="hidden xz:inline bg-gray-200  text-gray-600 py-1.5 px-3 rounded-4xl text-center mr-1">1</span>Formalização</li>
                            <p className="inline sm:hidden">-</p>
                            <Image
                                src="/div.svg"
                                width={32}
                                height={1}
                                alt="div"
                                className="hidden sm:block"
                            />

                            <li className=" text-gray-600 "><span className="hidden xz:inline  bg-gray-200  text-gray-600 py-1.5 px-3 rounded-4xl text-center mr-1 ">2</span>Documentos</li>
                            <p className="inline sm:hidden">-</p>
                            <Image
                                src="/div.svg"
                                width={32}
                                height={1}
                                alt="div"
                                className="hidden sm:block"
                            />

                            <li className="font-medium"><span className="hidden xz:inline bg-[var(--color-azul-escuro)] text-white py-1.5 px-3 rounded-4xl text-center mr-1 ">3</span>Informações</li>
                            <p className="inline sm:hidden">-</p>
                            <Image
                                src="/div.svg"
                                width={32}
                                height={1}
                                alt="div"
                                className="hidden sm:block"
                            />

                            <li className="text-gray-600"><span className="hidden xz:inline bg-gray-200 text-gray-600 py-1.5 px-3 rounded-4xl text-center mr-1">4</span>Upload</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-white mt-1 px-2 pt-2 rounded-md xs:mt-10 lg:mt-5 lg:px-6 lg:pt-7 pb-6"
                    style={{ boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.10), 0px 10px 15px 0px rgba(0, 0, 0, 0.10)' }}>
                    <h2>Tipo de Formalização</h2>

                    <div className="flex justify-between items-center gap-2 mt-5 flex-col lg:gap-4">

                        <div className=" w-full">

                            <div className="grid w-full items-center gap-1.5">
                                <Label className="font-normal" htmlFor="nome">Nome Completo</Label>
                                <Input type="nome" id="nome" placeholder="Digite o nome completo" />
                            </div>

                            <div className="mt-6">
                                <p>Analfabeto ? </p>

                                <div className="flex items-center gap-4 mt-4">

                                    <div>
                                        <input 
                                        type="radio" 
                                        id="no" 
                                        name="option" 
                                        className="appearance-none w-3 h-3 rounded-full border-1 border-black checked:bg-black checked:border-black" 
                                        onClick={() => {
                                            setIsAnalfabeto(false)
                                        }}
                                        />
                                        <label className="pl-1">Não</label>
                                    </div>

                                    <div>
                                        <input 
                                        type="radio" 
                                        id="no" 
                                        name="option" 
                                        className="appearance-none w-3 h-3 rounded-full border-1 border-black checked:bg-black checked:border-black" 
                                        onClick={() => {
                                            setIsAnalfabeto(true)
                                        }}
                                        />
                                        <label className="pl-1">Sim</label>
                                    </div>

                                </div>

                                

                                <div className={`w-full items-center gap-1.5 mt-7 ${isAnalfabeto ? "grid" : "hidden"}`}>
                                    <Label className="font-normal" htmlFor="nome">Nome da Testemunha</Label>
                                    <Input type="nome" id="nome" placeholder="Digite o nome da testemunha" />
                                    <p className="text-sm text-gray-500">Pessoa que assinou o documento em nome do analfabeto</p>
                                </div>


                            </div>



                        </div>


                    </div>

                    <div className="w-full flex justify-between items-center mt-7 border-t-1 border-t-gray-300 pb-3 pt-2">
                        <Link href="/pages/analise">
                            <Button className="bg-white text-[var(--color-azul-escuro)] border-1 border-gray-300">
                                Cancelar
                            </Button>
                        </Link>
                        <Button>Próximo</Button>
                    </div>
                </div>
                <div className="flex-1" />

                <footer className="w-screen -mx-3 bg-white flex px-3 text-sm justify-between gap-2 text-gray-500 border-t-1 border-t-gray-300
                xz:h-18 items-center lg:-mx-20 lg:px-20">
                    <p>© 2025 DocVerify. Todos os direitos reservados.</p>

                    <ul className="xs:flex gap-3">
                        <li>Termos</li>
                        <li>Privacidade</li>
                        <li>Suporte</li>
                    </ul>
                </footer>
            </section>
        </>
    )
}