import Navbar from "@/components/customComponents/Navbar";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Analise() {
    return (
        <>
            <Navbar />
            <section className="bg-gray-50 px-3 flex flex-col lg:px-20 " style={{ height: 'calc(100vh - 4rem)' }}>
                <div className="pt-2">
                    <h1 className="font-normal text-lg lg:text-2xl">Nova Análise</h1>
                    <div>
                        <ul className="flex items-center text-sm gap-1.5 mt-2 xz:mt-4 sm:gap-3 xl:gap-5">
                            <li className="font-medium"><span className="hidden xz:inline bg-[var(--color-azul-escuro)] text-white py-1.5 px-3 rounded-4xl text-center mr-1">1</span>Formalização</li>
                            <p className="inline sm:hidden">-</p>
                            <Image
                                src="/div.svg"
                                width={32}
                                height={1}
                                alt="div"
                                className="hidden sm:block"
                            />

                            <li className="text-gray-600"><span className="hidden xz:inline bg-gray-200 text-gray-600 py-1.5 px-3 rounded-4xl text-center mr-1 ">2</span>Documentos</li>
                            <p className="inline sm:hidden">-</p>
                            <Image
                                src="/div.svg"
                                width={32}
                                height={1}
                                alt="div"
                                className="hidden sm:block"
                            />

                            <li className="text-gray-600"><span className="hidden xz:inline bg-gray-200 text-gray-600 py-1.5 px-3 rounded-4xl text-center mr-1 ">3</span>Informações</li>
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

                <div className="bg-white mt-8 px-2 pt-4 rounded-md xs:mt-15" 
                style={{ boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.10), 0px 10px 15px 0px rgba(0, 0, 0, 0.10)' }}>
                    <h2>Tipo de Formalização</h2>

                    <div className="flex justify-between items-center gap-2 mt-5">
                        <div className="border-1 border-gray-300 w-full rounded-md h-36 lg:h-29">

                            <div className="flex items-center mt-5 mb-3 ml-3">
                                <Checkbox id="terms" className="rounded-md" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm pl-2">
                                    Física
                                </label>
                            </div>
                            <p className="text-sm ml-3 mb-3 text-gray-500">Documentos físicos e assinaturas em papel</p>


                        </div>

                        <div className="border-1 border-gray-300 w-full rounded-md h-36 lg:h-29">

                            <div className="flex items-center mt-5 mb-3 ml-3">
                                <Checkbox id="terms" className="rounded-md" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm pl-2">
                                    Digital
                                </label>
                            </div>
                            <p className="text-sm ml-3 mb-3 text-gray-500">Documentos digitais, selfies e assinaturas eletrônicas</p>


                        </div>
                    </div>

                    <div className="w-full flex justify-between items-center mt-7 border-t-1 border-t-gray-300 pb-3 pt-2">
                        <Link href="/dashboard">
                        <Button className="bg-white text-[var(--color-azul-escuro)] border-1 border-gray-300">
                            Cancelar
                        </Button>
                        </Link>
                        <Link href="/analisedocs"><Button>Próximo</Button></Link>
                    </div>
                </div>
                <div className="flex-1" />

                <footer className="w-screen -mx-3 mb-7 bg-white flex px-3 text-sm justify-between gap-2 text-gray-500 border-t-1 border-t-gray-300 
                xz:h-18 items-center lg:-mx-20 lg:px-20 lg:mb-15">
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

