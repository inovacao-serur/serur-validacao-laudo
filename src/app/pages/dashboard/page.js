import Navbar from "@/app/components/Navbar";
import { Button } from "@/components/ui/button"


export default function Dashboard (){
    return(
    <>
        <Navbar/>
        <section className="w-screen h-full px-3 bg-gray-50">
            
            <div className="w-full h-full flex justify-between items-center pt-8">
                <h1 className="text-base font-normal">Dashboard</h1>
                <Button>+ Nova Análise</Button>
            </div>

            <div className="w-full mt-8 py-2 pl-4 bg-white border-1 border-gray-300 rounded-md">
                <h2>Últimas Análises</h2>
            </div>

        </section>
    </>
    )
}