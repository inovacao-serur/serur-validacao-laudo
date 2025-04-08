import Navbar from "@/app/components/Navbar";
import { Button } from "@/components/ui/button"

import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"


async function getData() {
    // Fetch data from your API here.
    return [
        {
            id: "#12345",
            nome: "João Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/02/2025",
            amount: 100,
        },
        {
            id: "#22345",
            nome: "Alice Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2025",
            amount: 100,
        },
        {
            id: "#32345",
            nome: "Daniel",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2024",
            amount: 100,
        },
        {
            id: "#12345",
            nome: "João Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/02/2025",
            amount: 100,
        },
        {
            id: "#22345",
            nome: "Alice Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2025",
            amount: 100,
        },
        {
            id: "#32345",
            nome: "Daniel",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2024",
            amount: 100,
        },
        {
            id: "#12345",
            nome: "João Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/02/2025",
            amount: 100,
        },
        {
            id: "#22345",
            nome: "Alice Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2025",
            amount: 100,
        },
        {
            id: "#32345",
            nome: "Daniel",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2024",
            amount: 100,
        },
        {
            id: "#12345",
            nome: "João Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/02/2025",
            amount: 100,
        },
        {
            id: "#22345",
            nome: "Alice Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2025",
            amount: 100,
        },
        {
            id: "#32345",
            nome: "Daniel",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2024",
            amount: 100,
        },
        {
            id: "#12345",
            nome: "João Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/02/2025",
            amount: 100,
        },
        {
            id: "#22345",
            nome: "Alice Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2025",
            amount: 100,
        },
        {
            id: "#32345",
            nome: "Daniel",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2024",
            amount: 100,
        },
        {
            id: "#12345",
            nome: "João Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/02/2025",
            amount: 100,
        },
        {
            id: "#22345",
            nome: "Alice Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2025",
            amount: 100,
        },
        {
            id: "#32345",
            nome: "Daniel",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2024",
            amount: 100,
        },
        {
            id: "#12345",
            nome: "João Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/02/2025",
            amount: 100,
        },
        {
            id: "#22345",
            nome: "Alice Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2025",
            amount: 100,
        },
        {
            id: "#32345",
            nome: "Daniel",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2024",
            amount: 100,
        },
        {
            id: "#12345",
            nome: "João Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/02/2025",
            amount: 100,
        },
        {
            id: "#22345",
            nome: "Alice Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2025",
            amount: 100,
        },
        {
            id: "#32345",
            nome: "Daniel",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2024",
            amount: 100,
        },
        {
            id: "#12345",
            nome: "João Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/02/2025",
            amount: 100,
        },
        {
            id: "#22345",
            nome: "Alice Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2025",
            amount: 100,
        },
        {
            id: "#32345",
            nome: "Daniel",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2024",
            amount: 100,
        },
        {
            id: "#12345",
            nome: "João Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/02/2025",
            amount: 100,
        },
        {
            id: "#22345",
            nome: "Alice Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2025",
            amount: 100,
        },
        {
            id: "#32345",
            nome: "Daniel",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2024",
            amount: 100,
        },
        {
            id: "#12345",
            nome: "João Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/02/2025",
            amount: 100,
        },
        {
            id: "#22345",
            nome: "Alice Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2025",
            amount: 100,
        },
        {
            id: "#32345",
            nome: "Daniel",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2024",
            amount: 100,
        },
        {
            id: "#12345",
            nome: "João Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/02/2025",
            amount: 100,
        },
        {
            id: "#22345",
            nome: "Alice Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2025",
            amount: 100,
        },
        {
            id: "#32345",
            nome: "Daniel",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2024",
            amount: 100,
        },
        {
            id: "#12345",
            nome: "João Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/02/2025",
            amount: 100,
        },
        {
            id: "#22345",
            nome: "Alice Silva",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2025",
            amount: 100,
        },
        {
            id: "#32345",
            nome: "Daniel",
            tipo: "Digital",
            status: "Em Análise",
            data: "15/01/2024",
            amount: 100,
        },
     
        
    
      
    ]
}


export default async function Dashboard() {
    const data = await getData()
    return (
        <>
            <Navbar />
            <section className="w-screen h-full px-3 bg-gray-50">

                <div className="w-full h-full flex justify-between items-center pt-8">
                    <h1 className="text-base font-normal">Dashboard</h1>
                    <Button>+ Nova Análise</Button>
                </div>

                <div className="w-full mt-8 py-2 pl-4 bg-white border-1 border-gray-300 rounded-t-md">
                    <h2>Últimas Análises</h2>
                </div>
                <div>
                    <DataTable columns={columns} data={data} />
                </div>



            </section>
        </>
    )
}