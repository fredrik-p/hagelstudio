import Navbar from "../../components/Navbar";
import Image from "next/image";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Hagel Studio | Om',
};


const About = () => {
  return (
    <>
      <Navbar page="content" />
      <main className="flex flex-col items-center justify-center mt-0 md:mt-24 max-w-[780px] mx-auto">
        <div className="p-6 grid grid-cols-2 gap-4 md:gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/henke.jpg"
              alt="Henrik Johansson"
              width={500}
              height={500}
              className="mx-auto"
              quality={100}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="mb-3 font-extralight">
              Någonstans i gränslandet mellan formgivning, möbelsnickeri och
              skulptural gestaltning går det att hitta hagel studios kärna.
              Störst fokus ligger på arbetet i snickeriet som med stolthet bär
              den svenska hantverkstraditionen vidare. Möblerna som skapas, med
              sin grund i det skandinaviska formspråket, är tänkta att hålla i
              generationer.
            </p>
            <p className="mb-3 font-extralight">
              Jag som står bakom företaget heter Henrik Johansson och har
              gesällbrev som möbelsnickare från Capellagården. Förutom att verka
              som möbelsnickare håller jag återkommande kurser på Capellagården,
              en plats som ligger mig varmt om hjärtat. Att få dela passionen
              inför skapandet och då i synnerhet trä är en ynnest.
            </p>
            <p className="mb-3 font-extralight">
              Välkomna att höra av er om ni har frågor, är intresserade av ett
              samarbete eller bara vill säga hej!
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
