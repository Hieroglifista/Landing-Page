"use client";
import { useState } from "react";

export default function BotaoGif() {
  const [ativo, setAtivo] = useState(true);
  const [mostrar, setMostrar] = useState(false);

  // 🔧 Links editáveis:
  const gifUrl = "/cat-cute.gif";
  const imagemUrl =
    "/pc-rafael.jpg";

  // 🔧 Textos editáveis:
  const textoSobreGif = "VOCÊ ACHOU UM JUMP THE CAT";
  const textoSobreImagem = "VAZOU O PC DO RAFAEL!!";

  const iniciar = () => {
    setMostrar(true);

    // Após 6 segundos, esconder tudo
    setTimeout(() => {
      setMostrar(false);
      setAtivo(false);
    }, 10000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      {/* Textos em cima */}
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-3xl text-white mb-2 underline">Muito Obrigado a todos!</h1>
        <br />
        <p className="text-white">
          Vocês são incríveis, agradeço por terem feito desse curso o melhor curso possível, obrigado ao Caio por ter feito esse projeto comigo.
        </p>
        <p className="text-white">Aprendi muito com cada um de vocês.</p>
        <p className="text-white">
          Agradeço ao Marcelo também por ter sido um dos melhores professores que eu já tive em todos os quesitos.
        </p>
        <p className="text-white">
          Espero que a gente se encontre novamente num futuro próximo, e o próximo código que vocês fizerem, lembrem-se VDM!
        </p>
        <p className="text-blue-500">A gente se esbarra por aí!</p>
        <br />
        <p className="text-orange-500">By: Gabriel Miranda</p>
        <br />
      </div>

      {/* Botão */}
      {ativo && (
        <button
          onClick={iniciar}
          className="px-6 py-3 bg-blue-600 text-red-500 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          O que tem aqui??
        </button>
      )}

      {/* GIF + Imagem lado a lado */}
      {mostrar && (
        <div className="flex flex-row items-center gap-6">
          {/* GIF com texto sobreposto */}
          <div className="relative">
            <img
              src={gifUrl}
              alt="Gif escolhido"
              className="rounded-lg shadow-lg w-72"
            />
            <span
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-red-500 font-bold"
              style={{
                textShadow: "2px 2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000"
              }}
            >
              {textoSobreGif}
            </span>
          </div>

          {/* Imagem com texto sobreposto */}
          <div className="relative">
            <img
              src={imagemUrl}
              alt="Imagem escolhida"
              className="rounded-lg shadow-lg w-72"
            />
            <span
              className="absolute top-4 left-1/2 transform -translate-x-1/2 text-red-500 font-bold"
              style={{
                textShadow: "2px 2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000"
              }}
            >
              {textoSobreImagem}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
