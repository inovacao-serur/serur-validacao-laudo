"use client"
import Image from "next/image"

export const adminColumns = [
    {
        accessorKey: "usuario",
        header: "Usuário"
            
    },
    {
        accessorKey: "email",
        header: "Email"
            
    },
    {
        accessorKey: "funcao",
        header: "Função",
        cell: ({row}: {row: any}) => {
            return <div className="bg-gray-200 rounded-lg max-w-max px-1">{row.getValue("funcao")}</div>
        }
            
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({row}: {row: any}) => {
            return <div className={`${row.getValue("status") === "Ativo" ? "bg-gray-200  " : " bg-gray-100 text-gray-600"} max-w-max px-1 rounded-lg`}>{row.getValue("status")}</div>
        }
            
    },
  
    {
        accessorKey: 'acao',
        header: "Ações",
        cell: ({}) => {
            return(
                <div className="cursor-pointer">
                    <Image
                    src="/dots.svg"
                    width={4}
                    height={16}
                    alt="pontos"
                     />
                </div>
            )
        }
    }


    // {
    //     accessorKey: "amount",
    //     header: "Amount",
    //     cell: ({ row }) => {
    //         const amount = parseFloat(row.getValue("amount"))
    //         const formatted = new Intl.NumberFormat("en-US", {
    //             style: "currency",
    //             currency: "USD",
    //         }).format(amount)
    //         return <div className="font-medium">{formatted}</div>
    //     }

    // },
]