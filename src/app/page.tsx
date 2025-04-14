'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react";
import Image from 'next/image'
import { useState } from "react"
import { useRouter } from "next/navigation"

const Login: React.FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(email, password);

    try {
      const signInData = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/dashboard",
      });

      console.log(signInData);

      if (signInData?.error) {
        console.error(signInData.error);
      } else {
        console.log("Acesso realizado com sucesso.");
        router.push("/dashboard");
      }
    } catch (err) {
      console.error(err);
    }
  }

  function setTemLogin(arg0: boolean): void {
    throw new Error("Function not implemented.")
  }

  return (
    <form onSubmit={login}>
      <div className="w-sm h-xs border-0 border-gray-300 rounded-lg px-8 pt-8 pb-11"
        style={{ boxShadow: '0px 4px 6px 0px rgba(0, 0, 0, 0.10), 0px 10px 15px 0px rgba(0, 0, 0, 0.10)' }}>

        <div className="grid w-full max-w-sm items-center gap-1.5 relative">
          <Label htmlFor="email" className="font-normal">Email</Label>
          <Image
            src="/email.svg"
            width={16}
            height={16}
            alt="logo email"
            className="absolute left-3 mt-5"
          />
          <Input type="email" id="email" placeholder="seu@email.com" className="!text-base pl-10 py-5" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 mt-6 relative">
          <Label htmlFor="senha" className="font-normal">Senha</Label>
          <Image
            src="/senha.svg"
            width={16}
            height={16}
            alt="logo senha"
            className="absolute left-3 mt-5"
          />
          <Input type="password" id="senha" placeholder="••••••••" className="!text-base pl-10 py-5" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms2" />
            <label htmlFor="terms2" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal">
              Lembrar-me
            </label>
          </div>

          <p className="font-normal text-sm text-[var(--color-azul-escuro)] cursor-pointer">Esqueceu a senha?</p>
        </div>

        <div className="w-full flex justify-center mt-6">
          <Button className="w-full cursor-pointer" type="submit">Enviar</Button>
        </div>

      </div>

      <div className="mt-6">
        <p className="font-normal text-sm text-gray-400">Não tem uma conta?
          <a className="text-black pl-1 cursor-pointer" onClick={() => setTemLogin(false)}>Criar conta</a>
        </p>
      </div>
    </form>
  )
}

const Cadastro: React.FC = () => {
  function setTemLogin(arg0: boolean): void {
    throw new Error("Function not implemented.")
  }

  return (
    <>
      <div className="w-screen h-auto px-4 xs:w-sm xs:h-xs mt-6 xt:mt-8 2xl:mt-10 ">

        <div className="grid w-full max-w-sm items-center gap-1.5 relative">
          <Label htmlFor="nome" className="font-normal">Nome completo</Label>
          <Image
            src="/user.svg"
            width={16}
            height={16}
            alt="logo usuario"
            className="absolute left-3 mt-5"
          />
          <Input type="nome" id="nome" placeholder="Seu nome completo" className="!text-base pl-10 py-5" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 mt-4 relative xs:mt-6">
          <Label htmlFor="email" className="font-normal">Email</Label>
          <Image
            src="/email.svg"
            width={16}
            height={16}
            alt="logo email"
            className="absolute left-3 mt-5"
          />
          <Input type="email" id="email" placeholder="seu@email.com" className="!text-base pl-10 py-5" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 mt-4 relative xs:mt-6">
          <Label htmlFor="senha" className="font-normal" >Senha</Label>
          <Image
            src="/senha.svg"
            width={16}
            height={16}
            alt="logo senha"
            className="absolute left-3 mt-5"
          />
          <Input type="password" id="senha" placeholder="••••••••" className="!text-base pl-10 py-5 " />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 mt-4 relative xs:mt-6">
          <Label htmlFor="confsenha" className="font-normal" >Confirme a senha</Label>
          <Image
            src="/senha.svg"
            width={16}
            height={16}
            alt="logo senha"
            className="absolute left-3 mt-5"
          />
          <Input type="password" id="confsenha" placeholder="••••••••" className="!text-base pl-10 py-5" />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5 mt-4 relative xs:mt-6">
          <Label htmlFor="token" className="font-normal" >Token de acesso</Label>
          <Image
            src="/senha.svg"
            width={16}
            height={16}
            alt="logo token"
            className="absolute left-3 mt-5"
          />
          <Input type="token" id="token" placeholder="Digite o token de acesso" className="!text-base pl-10 py-5" />
        </div>

        <div className="flex justify-between items-center mt-4 xs:mt-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms2" />
            <label htmlFor="terms2" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal text-gray-400">
              Eu concordo com a <span className="text-black">Política de Privacidade</span> e os <span className="text-black">Termos de Uso</span>.
            </label>
          </div>

        </div>

        <div className="w-full flex justify-center mt-[5%] xs:mb-[5%]">
          <Button className="w-full">Criar conta</Button>
        </div>

      </div>

      <div className="mt-1 mb-3">
        <p className="font-normal text-sm text-gray-400">Já tem uma conta?
            <a className="text-black pl-1 cursor-pointer" onClick={() => setTemLogin(true)}> Fazer login</a>
        </p>
      </div>
    </>
  )
}

export default function Home() {
  const [temLogin, setTemLogin] = useState<boolean>(true)

  return (
    <main className="w-screen h-screen flex justify-center items-center flex-col ">
      <div className="flex justify-center items-center flex-col xs:mb-0 xt:mb-10 ">
        <Image
          src="/docverify.png"
          width={350}
          height={30}
          alt="logo doc verify"
        />
        <h1 className="text-xl text-gray-700 font-normal">Acesse sua conta</h1>
      </div>
      {temLogin ? (
        <Login />
      ) : (
        <Cadastro />
      )}

    </main>
  )
} 