import Image from "next/image";

export default function BackgroundImage() {
    return (
        <Image
            src="/backgroundImage.jpg"
            alt="Background Image"
            sizes="100vw"
            fill
            style={{
                objectFit: 'cover',
                zIndex: -1,
                position: "absolute",
            }}
        />
    );
}