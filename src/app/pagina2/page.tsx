'use client';

export default function Página2() {
  return (
    <main className="flex min-h-screen bg-transparent">
      {/* Coluna da esquerda: texto + imagens empilhadas */}
      <div className="ml-15 w-275 flex flex-col items-start">
        <h1 className="text-white mt-3">
          Variações do Deck SplashYard
        </h1>
        <p className="text-white mt-3 px-10">
          O deck SplashYard é altamente versátil, permitindo várias adaptações para se adequar a diferentes estilos de jogo e estratégias. Aqui estão algumas variações populares do deck:
        </p>

        <div className="flex flex-wrap  mt-5 space-y-3">
          <img className="w-25 h-43" src="/goblinstein.png" alt="" />

          <img className="w-29 h-43 ml-5" src="/bruxa.png" alt="" />

          <img className="w-34 h-46" src="/hut.png" alt="" />

          <img className="w-27 h-39 mt-3" src="/cage.png" alt="" />

          <img className="w-30 h-44.5 m" src="/canon.png" alt="" />

        <p className="text-white">Dependendo da variação das cartas muda a estratégia de acordo com habilidades especiais, como surgimento de novas tropas, mudanças de rota de tropas inimigas e atraso na velocidade das mesmas, eventos que que justificam a capacidade e eficiência da defesa do deck, o que o torna uma escolha excelente para jogadores experientes. </p>

        </div>
      </div>

      <div className="w-100 h-58 flex ">
        <img
          className="w-100 y-200"
          src="https://cdn.discordapp.com/attachments/1387556007143800954/1417305757694693388/deck.png?ex=68ca0058&is=68c8aed8&hm=119457ddc229cd78656b568325d5fdfd7ed74004af5fcf6a0141d68798fc7a01&"
          alt=""
        />
      </div>
      
    </main>
  );
}
