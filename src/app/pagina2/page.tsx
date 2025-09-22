'use client';

export default function Página2() {
  return (
    <main className="flex h-screen">
      {/* Coluna da esquerda: texto + imagens empilhadas */}
      <div className="ml-15 w-275 flex flex-col items-start">
        <h1 className="text-white mt-3">
          Variações do Deck SplashYard
        </h1>
        <p className="text-white mt-3 px-10">
          O deck SplashYard é altamente versátil, permitindo várias adaptações para se adequar a diferentes estilos de jogo e estratégias. Aqui estão algumas variações populares do deck:
        </p>

        <div className="flex flex-wrap  mt-5 space-y-3">
          <img className="w-25 h-44" src="https://cdn.discordapp.com/attachments/1387556007143800954/1418707305112801290/OIP-removebg-preview.png?ex=68cf19a3&is=68cdc823&hm=0a575ff3a2b118e60b1d15015694385c0f743d79ff5277ddad91f20aef4e1523&" alt="" />

          <img className="w-29 h-44 ml-5" src="https://cdn.discordapp.com/attachments/1387556007143800954/1418708366775025765/OIP-removebg-preview_1.png?ex=68cf1aa0&is=68cdc920&hm=82a8d8cf278c11520d22c0da5f18af4694c0c26f8034cbe3e0bd48e4cc11f90b&" alt="" />

          <img className="w-34 h-47" src="https://cdn.discordapp.com/attachments/1387556007143800954/1418728480610451457/OIP-removebg-preview_4.png?ex=68cf2d5c&is=68cddbdc&hm=87a9e405da1ab9e6182d9c8bfb44cc1db50a8217d3572c552440fd25d7b823e9&" alt="" />

          <img className="w-27 h-40 mt-3" src="https://cdn.discordapp.com/attachments/1387556007143800954/1418728481075757096/OIP-removebg-preview_3.png?ex=68cf2d5c&is=68cddbdc&hm=101b7a618067a65b51f040466440210de1703c44e1680a0b111aafc1a4ed0a03&" alt="" />

          <img className="w-30 h-45.5 m" src="https://cdn.discordapp.com/attachments/1387556007143800954/1418728481424019456/OIP-removebg-preview_2.png?ex=68cf2d5c&is=68cddbdc&hm=f9d685550773fce794aa2e738ce3c7bda89673d536692ed63e158736473805be&" alt="" />
        
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
