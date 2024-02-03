import Navbar from "../../components/Navbar";

const Exhibitions = () => {
    return (
        <>
            <Navbar page="content" />
            <main className="flex flex-col items-center justify-center md:h-[80vh] max-w-md mx-auto">
                <div className="p-6">
                    <h2 className="text-lg mb-3">Utställningar</h2>
                    <p className="mb-3">Capellagårdens sommarutställning, 2021–2023</p>
                    <p className="mb-3">Vida konsthall, 2022</p>
                    <p className="mb-3">Sydosten, Kalmar konstmuseum, 2022</p>
                    <p className="mb-3">Trä Art, Kulturgatan Bodafors, 2022</p>
                </div>
            </main>
        </>
    );
};

export default Exhibitions;

