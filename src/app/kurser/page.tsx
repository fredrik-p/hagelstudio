import Navbar from "../../components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "hagel studio | kurser",
};

const Courses = () => {
  return (
    <>
      <Navbar page="content" />
      <main className="flex flex-col items-center justify-center md:h-[70vh] max-w-lg mx-auto">
        <div className="p-6">
          <h2 className="text-lg mb-3">Kurser</h2>
          <Link
            href="https://www.capellagarden.se/forma-i-tra-2/"
            className="mb-3 font-extralight hover:text-stone-300 block"
            target="_blank"
          >
            Forma i trä, 29 juni-12 juli, Capellagården
          </Link>
          <Link
            href="https://www.capellagarden.se/krympburk-for-sma-och-stora-hander-2/"
            className="mb-3 font-extralight hover:text-stone-300 block"
            target="_blank"
          >
            Krympburk för små och stora händer, 15-16 juli, Capellagården
          </Link>
        </div>
      </main>
    </>
  );
};

export default Courses;
