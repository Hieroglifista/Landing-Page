import Grave from "@/components/grave";
import Ice from "@/components/ice";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="w-100 h-200">
        <Grave></Grave>
      </div>

      <div className="w-100 h-200">
        <Ice></Ice>
      </div>
      <div className="flex flex-col justify-between">
        <img className="mt-325 rounded-sm w-70 h-140" src="https://i.redd.it/dff5z37aniu71.jpg" alt="" />
        <img className="mt-60 rounded-sm w-70 h-140" src="https://store.supercell.com/_next/static/media/royale-store-preview-cta-figure.a4892669.png" alt="" />
        <img className="mt-240" src="https://store.supercell.com/_next/static/media/royale-store-preview-support-figure.20177a6a.png" alt="" />
      
      </div>

      <div>

        <img className="w-40 y-80 ml-5" src="https://cdn.discordapp.com/attachments/1387556007143800954/1416202553418322041/helmet.95197221.png?ex=68c948a8&is=68c7f728&hm=6d2d2d8b179a90e644cf4370c0d149a8df108082c8432c80e82f1e52823a8bc8&" alt="" />

        <img className="w-40 y-80" src="https://cdn.discordapp.com/attachments/1387556007143800954/1417288603373146262/coinbox.30bc4fd7.png?ex=68c9f05e&is=68c89ede&hm=81fb118c217553b5dd766ff9ff354d55078c3777cd109570e4273f4235b2d66a&" alt="" />
      </div>



      <div className="mb-7 flex flex-col items-start justify-start w-300 p-6 tect-left">
        <h1 className="bold">Sobre o Jogo</h1>
        <br /> <br />

        <p className="px-10">Clash Royale é um jogo de estratégia em tempo real desenvolvido pela Supercell, lançado em 2016. O jogo mistura mecânicas de cartas colecionáveis com batalhas em tempo real, onde os jogadores enfrentam uns aos outros em duelos de até 3 minutos. A missão é destruir as torres do adversário enquanto defende as suas próprias, utilizando cartas que representam unidades, feitiços e edificações com diferentes habilidades e custos de elixir.
          <br /> <br />
          Cada jogador começa com um deck de 8 cartas, sendo que durante a partida o elixir (um recurso que se recarrega ao longo do tempo) é utilizado para jogar essas cartas no campo de batalha. O jogo oferece uma combinação de estratégia, habilidade e rapidez de tomada de decisão.
        </p>
        <br /> <br />
        <h1 className="bold">Tutorial e Como Jogar:</h1>
        <p className="px-10">
          <br /> <br />
          Configuração Inicial:
          <br /> <br />
          Escolha de Cartas: Antes de começar a partida, você deve montar um deck com 8 cartas. Existem várias cartas que representam tropas (como soldados, arqueiras, etc.), feitiços (como foguetes ou raios) e construções (como torres ou barracas de tropas).
          <br /> <br />
          Objetivo do Jogo:
          <br /> <br />
          O objetivo principal é destruir as torres do adversário.
          <br /> <br />
          Se nenhuma Torre do Rei for destruída ao final de 3 minutos, o jogador que destruiu mais torres de coroas (as torres menores) vence.
          <br /> <br />
          Se o jogo terminar empatado, ocorre uma prorrogação de 1 minuto onde o próximo jogador a destruir qualquer torre ganha a partida.
          <br /> <br />
          O Campo de Batalha:
          <br /> <br />
          O campo é dividido em duas metades, uma para cada jogador. Cada lado possui uma Torre do Rei (a torre principal) e duas torres de coroas (torres menores que ajudam a defender).
          <br /> <br />
          As tropas são lançadas da sua área e se movem automaticamente até os alvos inimigos, atacando tanto as torres quanto as unidades adversárias.
          <br /> <br />
          Recursos e Elixir:
          <br /> <br />
          Elixir: O elixir é a moeda de jogo que permite jogar suas cartas. Ele se recarrega automaticamente ao longo do tempo, mas é importante saber usar o elixir com sabedoria, pois uma má gestão pode deixar você sem opções durante a partida.
          <br /> <br />
          Tempo de recarga: Após jogar uma carta, ela tem um tempo de recarga (ou cooldown), o que significa que você não pode jogar a mesma carta novamente de imediato.
          <br /> <br />
          Tipos de Cartas:
          <br /> <br />
          Tropas: Elas atacam automaticamente e possuem diferentes habilidades. Algumas atacam unidades, enquanto outras podem atacar torres. Exemplo: o Gigante (foca apenas em atacar torres) e o Arqueiro (ataca tanto tropas quanto torres).
          <br /> <br />
          Feitiços: São cartas que causam dano ou alteram o campo de batalha. Por exemplo, o Foguete causa grande dano em uma área e pode eliminar várias tropas ao mesmo tempo.
          <br /> <br />
          Construções: São cartas que colocam edifícios no campo de batalha, como a Cabana de Goblins, que gera goblins periodicamente.
          <br /> <br />
          Estratégias Básicas:
          <br /> <br />
          Defesa e Ataque: Combine cartas para defender suas torres e ao mesmo tempo lançar contra-ataques eficazes. Uma defesa sólida é essencial para manter o controle da partida.
          <br /> <br />
          Gerenciamento de Elixir: Aprenda a gastar seu elixir de maneira eficiente. Muitas vezes, jogar muitas cartas de uma vez pode deixar você sem recursos para se defender de um ataque inimigo.
          <br /> <br />
          Composição do Deck: Tenha uma combinação balanceada de cartas ofensivas e defensivas. Um deck com muitas cartas de ataque pode ser eficaz, mas você também precisa de defesas para conter os contra-ataques.
        </p>

        <h1 className=" text-black mt-3" >O QUE É SPLASHYARD?</h1>
        <p className=" mb-7 text-left text-black mt-3 px-10">

          SplashYard é um deck estratégico que combina o controle implacável do Tornado com o potencial explosivo do Cemitério. Ideal para jogadores que gostam de ditar o ritmo da partida, o SplashYard brilha tanto na defesa sólida quanto nos contra-ataques cirúrgicos.
          <br /> <br /> <br />
          Combinando cartas como Bebê Dragão, Mago de Gelo e Tornado, este deck oferece sinergia perfeita para limpar tropas inimigas com facilidade. Em seguida, aproveite cada brecha com o Cemitério, garantindo dano consistente e imprevisível nas torres inimigas.
          <br /> <br /> <br />
          Seja na ladder ou em desafios competitivos, o SplashYard se destaca pela sua capacidade de adaptação e alto potencial de vitória nas mãos de jogadores habilidosos.
        </p>
      </div>


    </main >
  );
}
