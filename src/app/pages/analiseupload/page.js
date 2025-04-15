"use client"
import Navbar from "@/app/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AnaliseUpload() {
    const [files, setFiles] = useState({
        rgFrente: "",
        rgVerso: "",
        reclamanteFrente: "",
        reclamanteVerso: "",
        cnhFrente: "",
        cnhVerso: "",
        cnhFrenteRe: "",
        cnhVersoRe: "",
        assDocContrato: "",
        assContrato: "",
        assDocReclamante: "",
        selfieDocContrato: "",
        selfieContrato: "",
        selfieDocReclamante: ""
    });

    const handleFileChange = (event, key) => {
        const file = event.target.files?.[0];
        if (file) {
            setFiles((prev) => ({ ...prev, [key]: file.name }));
        }
    };

    const renderInputRgCnh = (label, key) => (
        <div>
            <h2 className="mb-1">{label}</h2>
            <div className="border-1 border-dashed border-gray-400 rounded-sm w-max flex items-center justify-center flex-col p-2">
                <label className="text-sm text-gray-800 cursor-pointer">
                    Arraste ou clique
                    <input
                        type="file"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, key)}
                    />
                </label>
                <span className="text-xs text-gray-600 mt-1">{files[key]}</span>
            </div>
        </div>
    );

    const renderInputAssinaturaSelfie = (label, key) => (
        <div>
            <h2 className="mb-1 text-sm">{label}</h2>
            <div className="border-1 border-dashed border-gray-400 rounded-sm w-max flex items-center justify-center flex-col p-2">
                <label className="text-sm text-gray-800 cursor-pointer">
                    Arraste ou clique
                    <input
                        type="file"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, key)}
                    />
                </label>
                <span className="text-xs text-gray-600 mt-1">{files[key]}</span>
            </div>
        </div>
    );
    return (
        <>
            <Navbar />
            <section className="bg-gray-50 px-3 flex flex-col lg:px-20 overflow-x-hidden " style={{ height: 'calc(100vh - 4rem)' }}>
                <div className="pt-2">
                    <h1 className="font-normal text-lg lg:text-2xl">Nova Análise</h1>
                    <div>
                        <ul className="flex items-center text-sm gap-1.5 mt-2 xz:mt-4 sm:gap-3 xl:gap-5">
                            <li className="text-gray-600"><span className="hidden xz:inline bg-gray-200  text-gray-600 py-1.5 px-3 rounded-4xl text-center mr-1">1</span>Formalização</li>
                            <p className="inline sm:hidden">-</p>
                            <Image
                                src="/div.svg"
                                width={32}
                                height={1}
                                alt="div"
                                className="hidden sm:block"
                            />

                            <li className="text-gray-600 "><span className="hidden xz:inline  bg-gray-200  text-gray-600 py-1.5 px-3 rounded-4xl text-center mr-1 ">2</span>Documentos</li>
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

                            <li className="font-medium"><span className="hidden xz:inline  bg-[var(--color-azul-escuro)] text-white  py-1.5 px-3 rounded-4xl text-center mr-1">4</span>Upload</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white mt-1 px-2 pt-2 rounded-md xs:mt-10 lg:mt-5 lg:px-6 lg:pt-7 pb-6"
                    style={{ boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.10), 0px 10px 15px 0px rgba(0, 0, 0, 0.10)' }}>
                    <h2 className="text-[var(--color-azul-escuro)]">Upload dos Documentos</h2>
                    {/* RG */}
                    <div className="flex justify-between items-center gap-2 mt-5 flex-col lg:gap-4">
                        <div className="w-full flex flex-col">
                            <div className="mb-3 flex gap-2">
                                <Image
                                    src="/upload/documento.svg"
                                    width={20}
                                    height={18}
                                    alt="documento"
                                />
                                <h2 className="text-[var(--color-azul-escuro)]">RG</h2>
                            </div>


                            <div>
                                <div className="w-full items-center gap-1.5 ">
                                    <form className="grid grid-cols-1 grid-rows-1 gap-6 lg:grid-cols-2">

                                        <div>
                                            <p className="text-[var(--color-azul-escuro)] text-sm">Documento usado na contratação</p>
                                            <div className="grid grid-cols-2 mt-2 gap-4">
                                                {renderInputRgCnh("Frente", "rgFrente")}
                                                {renderInputRgCnh("Verso", "rgVerso")}
                                            </div>
                                            {/* <div className="grid grid-cols-2 grid-rows-1 mt-2">
                                                <div>
                                                    <h2 className="mb-1">Frente</h2>
                                                    <div className="border-1 border-dashed border-gray-400 rounded-sm w-max flex items-center justify-center flex-col  p-2">
                                                        <Image
                                                            src="/upload.svg"
                                                            width={37}
                                                            height={30}
                                                            alt="nuvem de upload"
                                                            className="hidden"
                                                        />
                                                        <label htmlFor='selecao-arquivo' className=" text-sm text-gray-800">Arraste ou clique</label>
                                                        <input id='selecao-arquivo' type='file' className="hidden" />
                                                        <span id='file-name'></span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <h2 className="mb-1">Verso</h2>
                                                    <div className="border-1 border-dashed border-gray-400 rounded-sm w-max flex items-center justify-center flex-col  p-2">
                                                        <Image
                                                            src="/upload.svg"
                                                            width={37}
                                                            height={30}
                                                            alt="nuvem de upload"
                                                            className="hidden"
                                                        />
                                                        <label htmlFor='selecao-arquivo' className=" text-sm text-gray-800">Arraste ou clique</label>
                                                        <input id='selecao-arquivo' type='file' className="hidden" />
                                                        <span id='file-name'></span>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>


                                        <div>
                                            <p className="text-[var(--color-azul-escuro)] text-sm">Documento do reclamante</p>
                                            <div className="grid grid-cols-2 mt-2 gap-4">
                                                {renderInputRgCnh("Frente", "rgFrente")}
                                                {renderInputRgCnh("Verso", "rgVerso")}
                                            </div>
                                        </div>

                                    </form>
                                </div>

                            </div>

                        </div>


                    </div>
                    {/* CNH */}
                    <div className="flex justify-between items-center gap-2 mt-5 flex-col lg:gap-4">
                        <div className="w-full flex flex-col">
                            <div className="mb-3 flex gap-2">
                                <Image
                                    src="/upload/documento.svg"
                                    width={20}
                                    height={18}
                                    alt="documento"
                                />
                                <h2 className="text-[var(--color-azul-escuro)]">CNH</h2>
                            </div>


                            <div>
                                <div className="w-full items-center gap-1.5 ">
                                    <form className="grid grid-cols-1 grid-rows-1 gap-6 lg:grid-cols-2">

                                        <div>
                                            <p className="text-[var(--color-azul-escuro)] text-sm">Documento usado na contratação</p>
                                            <div className="grid grid-cols-2 mt-2 gap-4">
                                                {renderInputRgCnh("Frente", "cnhFrente")}
                                                {renderInputRgCnh("Verso", "cnhVerso")}
                                            </div>
                                            {/* <div className="grid grid-cols-2 grid-rows-1 mt-2">
                                                <div>
                                                    <h2 className="mb-1">Frente</h2>
                                                    <div className="border-1 border-dashed border-gray-400 rounded-sm w-max flex items-center justify-center flex-col  p-2">
                                                        <Image
                                                            src="/upload.svg"
                                                            width={37}
                                                            height={30}
                                                            alt="nuvem de upload"
                                                            className="hidden"
                                                        />
                                                        <label htmlFor='selecao-arquivo' className=" text-sm text-gray-800">Arraste ou clique</label>
                                                        <input id='selecao-arquivo' type='file' className="hidden" />
                                                    </div>
                                                </div>

                                                <div>
                                                    <h2 className="mb-1">Verso</h2>
                                                    <div className="border-1 border-dashed border-gray-400 rounded-sm w-max flex items-center justify-center flex-col  p-2">
                                                        <Image
                                                            src="/upload.svg"
                                                            width={37}
                                                            height={30}
                                                            alt="nuvem de upload"
                                                            className="hidden"
                                                        />
                                                        <label htmlFor='selecao-arquivo' className=" text-sm text-gray-800">Arraste ou clique</label>
                                                        <input id='selecao-arquivo' type='file' className="hidden" />
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div>
                                            <p className="text-[var(--color-azul-escuro)] text-sm">Documento do reclamante</p>
                                            <div className="grid grid-cols-2 mt-2 gap-4">
                                                {renderInputRgCnh("Frente", "cnhFrenteRe")}
                                                {renderInputRgCnh("Verso", "cnhVersoRe")}
                                            </div>
                                        </div>



                                    </form>
                                </div>

                            </div>

                        </div>


                    </div>
                    {/* Endereco */}
                    <div className="flex justify-between items-center gap-2 mt-5 flex-col lg:gap-4">
                        <div className="w-full flex flex-col">
                            <div className="mb-3 flex gap-2">
                                <Image
                                    src="/upload/documento.svg"
                                    width={20}
                                    height={18}
                                    alt="documento"
                                />
                                <h2 className="text-[var(--color-azul-escuro)]">Endereço</h2>
                            </div>



                            <div className="w-full items-center gap-1.5 ">
                                <form className="grid grid-cols-1 w-full grid-rows-1">

                                    <div>
                                        <p className="text-[var(--color-azul-escuro)] text-sm">Endereço presente na inicial</p>
                                        <div className="grid grid-cols-1 grid-rows-2 mt-2 lg:grid-cols-2 lg:grid-rows-1 gap-10">
                                            <div className="w-full">
                                                <h2 className="mb-1">Frente</h2>
                                                <div className=" flex items-center justify-center flex-col">
                                                    <Image
                                                        src="/upload.svg"
                                                        width={37}
                                                        height={30}
                                                        alt="nuvem de upload"
                                                        className="hidden"
                                                    />
                                                    <input id='selecao-arquivo' type='text' placeholder="Digite o endereço..."
                                                        className="border-1 border-gray-400 rounded-sm pt-2 pl-2 pb-10 w-full" />
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <h2 className="mb-1">Verso</h2>
                                                <div className=" flex items-center justify-center flex-col">
                                                    <Image
                                                        src="/upload.svg"
                                                        width={37}
                                                        height={30}
                                                        alt="nuvem de upload"
                                                        className="hidden"
                                                    />
                                                    <input id='selecao-arquivo' type='text' placeholder="Digite o endereço..."
                                                        className="border-1 border-gray-400 rounded-sm pt-2 pl-2 pb-10 w-full" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </form>
                            </div>



                        </div>


                    </div>
                    {/* Assinatura */}
                    <div className="flex justify-between items-center gap-2 mt-5 flex-col lg:gap-4">
                        <div className="w-full flex flex-col">
                            <div className="mb-3 flex gap-2">
                                <Image
                                    src="/upload/assinatura.svg"
                                    width={20}
                                    height={18}
                                    alt="documento"
                                />
                                <h2 className="text-[var(--color-azul-escuro)]">Assinaturas</h2>
                            </div>


                            <div>
                                <div className="w-full items-center gap-1.5 ">
                                    <form className="grid grid-cols-1 grid-rows-1 gap-6">

                                        <div>
                                            <p className="text-[var(--color-azul-escuro)] text-sm">Documento usado na contratação</p>
                                            <div className="grid grid-cols-1 mt-2 gap-4 lg:grid-cols-3">
                                                {renderInputRgCnh("Assinatura no documento do contrato", "assDocContrato")}
                                                {renderInputRgCnh("Assinatura no contrato", "assContrato")}
                                                {renderInputRgCnh("Assinatura no documento do reclamante", "assDocReclamante")}
                                            </div>
                                        </div>



                                    </form>
                                </div>

                            </div>

                        </div>


                    </div>
                    {/* Selfie */}
                    <div className="flex justify-between items-center gap-2 mt-5 flex-col lg:gap-4">
                        <div className="w-full flex flex-col">
                            <div className="mb-3 flex gap-2">
                                <Image
                                    src="/upload/selfie.svg"
                                    width={20}
                                    height={18}
                                    alt="documento"
                                />
                                <h2 className="text-[var(--color-azul-escuro)]">Selfies</h2>
                            </div>


                            <div>
                                <div className="w-full items-center gap-1.5 ">
                                    <form className="grid grid-cols-1 grid-rows-1 gap-6">

                                        <div>
                                            <p className="text-[var(--color-azul-escuro)] text-sm">Documento usado na contratação</p>
                                            <div className="grid grid-cols-1 mt-2 gap-4 lg:grid-cols-3 lg:grid-rows-1">
                                                {renderInputRgCnh("Selfie com documento do contrato", "selfieDocContrato")}
                                                {renderInputRgCnh("Selfie com contrato", "selfieContrato")}
                                                {renderInputRgCnh("Selfie com documento do reclamante", "selfieDocReclamante")}
                                            </div>
                                        </div>



                                    </form>
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