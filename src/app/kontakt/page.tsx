import Navbar from "../../components/Navbar";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'hagel studio | kontakt',
};


const Contact = () => {
  return (
    <>
      <Navbar page="content" />
      <main className="flex flex-col items-center justify-center h-[70vh]">
        <div className="p-6">
          <h2 className="text-3xl">h</h2>
        </div>
        <div className="">
          <a
            href="mailto:info@hagelstudio.com"
            className="block hover:text-stone-300 mb-1"
          >
            info@hagelstudio.com
          </a>
          <a
            href="tel:+46733385818"
            className="block hover:text-stone-300 mb-1"
          >
            +46(0)733-38 58 18
          </a>
          <a
            href="https://www.instagram.com/henrik_snickrar/"
            className="block hover:text-stone-300"
          >
            @hagelstudio
          </a>
        </div>
      </main>
    </>
  );
};

export default Contact;
