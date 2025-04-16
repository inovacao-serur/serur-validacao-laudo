"use client"
import { createContext, useContext, useState, useEffect } from "react";

type DadosContextType = {
    isFisica: boolean | null;
    setIsFisica: (value: boolean | null) => void;
    rg?: boolean;
    setRg: (value: boolean) => void;
    cnh?: boolean;
    setCnh: (value: boolean) => void;
    assinatura?: boolean;
    setAssinatura: (value: boolean) => void;
    endereco?: boolean;
    setEndereco: (value: boolean) => void;
    selfie?: boolean;
    setSelfie: (value: boolean) => void;
  };
const DadosContext = createContext<DadosContextType | undefined>(undefined);

export const DadosProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFisica, setIsFisica] = useState<boolean | null>(null);
  const [rg, setRg] = useState<boolean>();
  const [cnh, setCnh] = useState<boolean>();
  const [assinatura, setAssinatura] = useState<boolean>();
  const [endereco, setEndereco] = useState<boolean>();
  const [selfie, setSelfie] = useState<boolean>();





  useEffect(() => {
    const mostrar = localStorage.getItem("isFisica");

    if (mostrar !== null) setIsFisica(JSON.parse(mostrar));

    const campos = localStorage.getItem("camposSelecionados");
    if (campos) {
      const data = JSON.parse(campos);
      setRg(data.rg || false);
      setCnh(data.cnh || false);
      setAssinatura(data.assinatura || false);
      setEndereco(data.endereco || false);
      setSelfie(data.selfie || false);
    }
    
  }, []);

  useEffect(() => {
    localStorage.setItem("isFisica", JSON.stringify(isFisica));
  }, [isFisica]);

  useEffect(() => {
    const campos = {
      rg,
      cnh,
      assinatura,
      endereco,
      selfie,
    };
    localStorage.setItem("camposSelecionados", JSON.stringify(campos));
  }, [rg, cnh, assinatura, endereco, selfie]);



  return (
    <DadosContext.Provider
      value={{
        isFisica,
        setIsFisica,
        rg,
        setRg,
        cnh,
        setCnh,
        assinatura,
        setAssinatura,
        endereco,
        setEndereco,
        selfie,
        setSelfie,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export const useDados = () => {
  const context = useContext(DadosContext);
  if (!context) throw new Error("useDados precisa estar dentro de um <DadosProvider>");
  return context;
};
