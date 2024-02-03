import Navbar from '../components/Navbar';
import BackgroundImage from '@/images/backgroundImage'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <div className="flex flex-col items-center">
        <BackgroundImage />
        </div>
      </main>
    </>
  );
}