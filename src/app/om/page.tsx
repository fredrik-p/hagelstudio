import Navbar from "../../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center h-[80vh] max-w-md mx-auto">
        <div className="p-6">
        <p className="mb-3">Någonstans i gränslandet mellan formgivning, möbelsnickeri och skulptural gestaltning går det hitta hagel studios kärna. Största fokus ligger dock på arbetet i snickeriet som med stolthet bär den svenska hantverkstraditionen vidare. Möblerna som skapas, med sin grund i det skandinaviska formspråket, är tänkta att hålla i generationer.
        </p>
        <p className="mb-3">
        Jag som står bakom företaget heter Henrik Johansson och har gesällbrev som möbelsnickare från Capellagården. Förutom att verka som möbelsnickare håller jag återkommande i kurser på Capellagården, en plats som ligger mig varmt om hjärtat. Att få dela passionen inför skapandet och då i synnerhet trä är en ynnest.
        </p>
        <p className="mb-3">
        Välkomna att höra av er om ni har frågor, är intresserade av ett samarbete eller bara vill säga hej!</p>
        </div>
      </main>
    </>
  );
};

export default About;
