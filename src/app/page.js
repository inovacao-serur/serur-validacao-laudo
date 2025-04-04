import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Image from 'next/image'


export default function Login() {
  return (
    <main className="w-screen h-screen flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col mb-8">
        <Image 
        src="/docverify.png"
        width={350}
        height={30}
        alt="logo doc verify"
        />
        <h1 className="pt-3 text-xl text-gray-700 font-normal">Acesse sua conta</h1>
      </div>
      <div className="w-sm h-xs border-0 border-gray-300 rounded-lg shadow-2xl px-8 pt-8 pb-11">

        <div className="grid w-full max-w-sm items-center gap-1.5 relative">
          <Label htmlFor="email" className="font-normal">Email</Label>
          <Image 
          src="/email.svg"
          width={16}
          height={16}
          alt="logo email"
          className="absolute left-3 mt-5"
          />
          <Input type="email" id="email" placeholder="seu@email.com" className="!text-base pl-10 py-5"/>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 mt-6 relative">
          <Label htmlFor="senha" className="font-normal" >Senha</Label>
          <Image 
          src="/senha.svg"
          width={16}
          height={16}
          alt="logo senha"
          className="absolute left-3 mt-5"
          />
          <Input type="senha" id="senha" placeholder="••••••••" className="!text-base pl-10 py-5" />
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms2" />
            <label htmlFor="terms2" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal">
              Lembrar-me
            </label>
          </div>

          <p className="font-normal text-sm text-[var(--color-azul-escuro)] cursor-pointer">Esqueceu a senha ?</p>
        </div>

        <div className="w-full flex justify-center mt-6">
        <Button className="w-full">Enviar</Button>
        </div>

      </div>

      <div className="mt-6">
        <p className="font-normal text-sm text-gray-400">Não tem uma conta? <a className="text-black pl-1 cursor-pointer"> Criar conta</a></p>
      </div>
    </main>
  );
}
