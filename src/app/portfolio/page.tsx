import Navbar from "../../components/Navbar";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "hagel studio | portfolio",
};

const Portfolio = () => {
  return (
    <>
      <Navbar page="content" />
      <main className="flex flex-col items-center justify-center max-w-[1500px] mx-auto">
        <div className="p-6 flex flex-col items-center justify-center">
          <Image
            src="/DSCF4476.jpg"
            alt="Bild på telefonbänk"
            width={800}
            height={500}
            quality={80}
            priority
          />

          <Image
            src="/hammer.jpg"
            alt="Detaljbild på tyger,hammare och spik"
            width={400}
            height={400}
            quality={80}
            priority
            style={{
              marginTop: 25,
            }}
          />
          <Image
            src="/3.jpg"
            alt="Bild på stol"
            width={400}
            height={400}
            quality={80}
            priority
            style={{
              marginTop: 25,
            }}
          />
          <Image
            src="/4.jpg"
            alt="Detljbild på pall"
            width={400}
            height={400}
            quality={80}
            priority
            style={{
              marginTop: 25,
            }}
          />
          <Image
            src="/5.jpg"
            alt="Bild på detalj"
            width={400}
            height={400}
            quality={80}
            priority
            style={{
              marginTop: 25,
            }}
          />
          <Image
            src="/2.jpg"
            alt="Bild på bänk"
            width={400}
            height={400}
            quality={80}
            priority
            style={{
              marginTop: 25,
            }}
          />
          <Image
            src="/6.jpg"
            alt="Bild på bänk utomhus"
            width={400}
            height={400}
            quality={80}
            priority
            style={{
              marginTop: 25,
            }}
          />
          <Image
            src="/7.jpg"
            alt="Bild på mediamöbel"
            width={400}
            height={400}
            quality={80}
            priority
            style={{
              marginTop: 25,
            }}
          />
          <Image
            src="/8.jpg"
            alt="Bild på bord"
            width={600}
            height={400}
            quality={80}
            priority
            style={{
              marginTop: 25,
            }}
          />
          <Image
            src="/9.jpg"
            alt="Bild på detalj"
            width={400}
            height={400}
            quality={80}
            priority
            style={{
              marginTop: 25,
            }}
          />
        </div>
      </main>
    </>
  );
};

export default Portfolio;
