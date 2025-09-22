import Grave from "@/components/grave";
import Ice from "@/components/ice";

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className="w-50 y-100">
        <Grave></Grave>
      </div>

      <div className="w-50 y-100">
        <Ice></Ice>
      </div>

      <div>

      <img className="w-40 y-80 ml-5" src="/helmet.png" alt="" />

      <img className="w-40 y-80" src="/coinbox.png" alt="" />
      </div>

      <div className="ml-15 w-275 items-left">
        <h1 className=" text-white mt-3" >O QUE É SPLASHYARD?</h1>
        <p className=" text-white mt-3 px-10">

          SplashYard é um deck estratégico que combina o controle implacável do Tornado com o potencial explosivo do Cemitério. Ideal para jogadores que gostam de ditar o ritmo da partida, o SplashYard brilha tanto na defesa sólida quanto nos contra-ataques cirúrgicos.
          <br /> <br />
          Combinando cartas como Bebê Dragão, Mago de Gelo e Tornado, este deck oferece sinergia perfeita para limpar tropas inimigas com facilidade. Em seguida, aproveite cada brecha com o Cemitério, garantindo dano consistente e imprevisível nas torres inimigas.
          <br /> <br />
          Seja na ladder ou em desafios competitivos, o SplashYard se destaca pela sua capacidade de adaptação e alto potencial de vitória nas mãos de jogadores habilidosos.

        </p>
      </div>
    </main >
  );
}
