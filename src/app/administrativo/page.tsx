'use client'

import Navbar from "@/components/customComponents/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AdminDataTable } from "./admin-data-table";
import { adminColumns } from "./adminColumns"
import { useEffect, useState } from "react";

async function getDataAdmin() {
    return [
        {
            usuario: "João Silva",
            email: "joao.silva@email.com",
            funcao: "Admin",
            status: "Ativo"
        },
        {
            usuario: "Maria Santos",
            email: "maria.santos@email.com",
            funcao: "Usuário",
            status: "Inativo"
        },
    ]
}

export default function Administrativo() {
    const [data, setData] = useState<any[]>([])


       useEffect(() => {
            async function fetchData() {
                const data = await getDataAdmin()
                setData(data)
            }
            fetchData()
        }, [])


    return (
        <>
            <Navbar />
            <section>
                <section className="w-screen h-full px-3 bg-gray-50 lg:px-20">

                    <div className="w-full h-full flex flex-col justify-between pt-8 gap-2">
                        <div className="w-full flex flex-col">
                            <h1 className="text-2xl text-[var(--color-azul-escuro)]">Gerenciar Usuários</h1>
                            <p className="text-gray-500">Gerencie todos os usuários do sistema</p>
                        </div>
                        <Link href="/analise">
                            <Button>+ Adicionar Usuário</Button>
                        </Link>
                    </div>
                    
                    <div className="mt-10">
                        <AdminDataTable columns={adminColumns} data={data}/>
                    </div>

                </section>
            </section>
        </>
    )
}