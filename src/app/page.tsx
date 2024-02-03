import Navbar from "../components/Navbar";
import BackgroundImage from "@/images/backgroundImage";

export default function Home() {
  return (
    <>
      <Navbar page="main" />
      <main>
        <div className="flex flex-col items-center">
          <BackgroundImage />
        </div>
      </main>
    </>
  );
}
