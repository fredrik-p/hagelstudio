// app/courses/Courses.tsx
"use client";

import Navbar from "./Navbar";
import Link from "next/link";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

// ✅ No metadata export here anymore

const Courses = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Navbar page="content" />
      <main className="flex flex-col items-center justify-center md:h-[70vh] max-w-lg mx-auto">
        <div className="p-6">
          <h2 className="text-lg mb-3">Kurser</h2>

          <p
            onClick={handleOpen}
            className="mb-3 font-extralight hover:text-stone-300 block cursor-pointer"
          >
            Bygg din egen automata, 23-25 maj, Stockholm
          </p>

<Modal open={open} onClose={handleClose}>
  <div className="relative bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-2xl mx-auto mt-12 max-h-[90vh] overflow-y-auto">
    {/* Close Button */}
    <button
      onClick={handleClose}
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      aria-label="Stäng"
    >
      <CloseIcon />
    </button>

    {/* Modal Content */}
    <h4 className="text-md font-semibold mb-4">Bygg din egen automata</h4>

    <p className="mb-4 text-sm text-gray-700">
      Under en intensiv och finurlig helg kommer vi tillsammans komma fram till en automata att bygga och genomföra. Kursen riktar sig till den som inte har någon erfarenhet alls av att arbeta med trä, såväl till den som har stor erfarenhet. Vi kommer se till att alla får ut något av dagarna tillsammans!
    </p>

    <p className="mb-4 text-sm text-gray-700">
      Automata är en mekanisk träkonstruktion där vissa delar är rörliga och sätter något i rörelse. För att få inspiration kommer jag ta med ett par stycken automator jag gjort men även kika på lite olika fiffiga uppfinnare världen över.
    </p>

    <p className="mb-4 text-sm text-gray-700">
      Under kursen kommer du som deltagare mestadels arbeta vid din bänkplats. De maskiner som behöver användas kommer vi tillsammans gå igenom så att det känns tryggt att arbeta vid dem.
    </p>

    <h5 className="text-sm font-medium mt-6 mb-2">Bakgrund</h5>
    <p className="mb-4 text-sm text-gray-700">
      Jag som håller i kursen heter Henrik Johansson och har gesällbrev som möbelsnickare med utbildning från Capellagården, Öland. Numer är jag verksam som möbelsnickare och kursledare.
    </p>

    <h5 className="text-sm font-medium mt-6 mb-2">Datum och tider</h5>
    <ul className="list-disc pl-5 mb-4 text-sm text-gray-700">
      <li>23 maj 18:00: kort introduktion och uppstart</li>
      <li>24 maj 10:00–17:00: heldag i verkstan med paus för lunch och fika</li>
      <li>25 maj 10:00–16:00: fortsatt arbete och kort avslutning innan vi skiljs åt</li>
    </ul>

    <h5 className="text-sm font-medium mt-6 mb-2">Plats</h5>
    <p className="mb-4 text-sm text-gray-700">
      Kalthoff axes lokal på Södermalm i Stockholm. Adressen är Bastugatan 43.
    </p>

    <h5 className="text-sm font-medium mt-6 mb-2">Pris</h5>
    <p className="mb-4 text-sm text-gray-700">
      3000 kronor inkl. moms. Betalning sker via faktura. Mejla namn- och adressuppgifter till{" "}
      <a href="mailto:info@hagelstudio.com" className="text-blue-600 underline">
        info@hagelstudio.com
      </a>{" "}
      för att få betalningsuppgifter med vändande mejl. I priset ingår fika båda dagarna. Det finns micro om man vill värma lunch och i annat fall finns många ställen att välja på i området.
    </p>

    <h5 className="text-sm text-gray-700 font-medium">Varmt välkomna!</h5>
    <p className="mb-4 mt-6 text-sm text-gray-700 italic">
      OBS! Begränsat antal platser. Minsta antal anmälningar för att kursen ska genomföras är fem stycken. Anmälan är bindande när fakturan betalats. Avgiften återbetalas ej vid avanmälan senare än 14 dagar efter att fakturan betalats. Du kan däremot överlåta din plats till någon annan om du vill. Om kursen behöver ställas in pga. för få anmälningar eller annat tas beslut om detta 2 veckor innan kursstart. Vi förbehåller oss även rätten att ställa in kursen vid akuta händelser. Vid inställd kurs återbetalas hela kursavgiften.
    </p>
  </div>
</Modal>

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