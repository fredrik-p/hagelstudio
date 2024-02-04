import Navbar from "../../components/Navbar";
import Image from "next/image";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'hagel studio | portfolio',
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
            height={800}
            quality={90}
            priority
          />
          <Image
            src="/2.jpg"
            alt="Bild på telefonbänk"
            width={400}
            height={400}
            quality={80}
            priority
            style={{
              marginTop: 20,
            }}
          />
          <Image
            src="/hammer.jpg"
            alt="Hammare och spik"
            width={400}
            height={400}
            quality={80}
            priority
            style={{
              marginTop: 20,
            }}
          />
        </div>
      </main>
    </>
  );
};

export default Portfolio;
