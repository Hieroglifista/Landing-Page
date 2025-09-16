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

      <div className="w-25 h-50">

      <img src="https://cdn.discordapp.com/attachments/1387556007143800954/1416202553418322041/helmet.95197221.png?ex=68c948a8&is=68c7f728&hm=6d2d2d8b179a90e644cf4370c0d149a8df108082c8432c80e82f1e52823a8bc8&" alt="" />

      <img src="https://cdn.discordapp.com/attachments/1387556007143800954/1417288603373146262/coinbox.30bc4fd7.png?ex=68c9f05e&is=68c89ede&hm=81fb118c217553b5dd766ff9ff354d55078c3777cd109570e4273f4235b2d66a&" alt="" />
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
