import Navbar from "../../components/Navbar";
import Link from "next/link";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Hagel Studio | Kurser',
};


const Courses = () => {
  return (
    <>
      <Navbar page="content" />
      <main className="flex flex-col items-center justify-center md:h-[70vh] max-w-lg mx-auto">
        <div className="p-6">
          <h2 className="text-lg mb-3">Kurser</h2>
          <Link href="https://www.capellagarden.se/stolsflatning-med-papperssnore-26-28-april-2024/" className="mb-3 font-extralight hover:text-stone-300 block" target="_blank">
          Stolsflätning med papperssnöre, 26-28 april, Capellagården
          </Link>
          <Link href="https://www.capellagarden.se/forma-i-tra/" className="mb-3 font-extralight hover:text-stone-300 block" target="_blank">
          Forma i trä, 30 juni-13 juli, Capellagården
          </Link>
          <Link href="https://www.capellagarden.se/krympburk-for-sma-och-stora-hander/" className="mb-3 font-extralight hover:text-stone-300 block" target="_blank">
          Krympburk för stora och små händer, 30-31 juli, Capellagården
          </Link>
    
        </div>
      </main>
    </>
  );
};

export default Courses;
